import pandas as pd
import re
from opencc import OpenCC
from collections import Counter
from ckip import CkipSegmenter
segmenter = CkipSegmenter()
import zipfile

forum = pd.read_csv("lib/tasks/Crawler/Dcard/forums.csv",names = ["board_name","alias","board_url"])
post_id = pd.read_csv("lib/tasks/Crawler/Dcard/post_id.csv", names = ["post_id","post_title","board_name","alias"])
post = pd.read_csv("lib/tasks/Crawler/Dcard/post_content.csv", names = ["post_id","post_content","post_title","created_at", "updated_at", "comment_count","like_count","gender"])
comment = pd.read_csv("lib/tasks/Crawler/Dcard/post_comment.csv", names = ["comment_id", "post_id","created_at", "updated_at","floor", "comment_content","like_count", "gender"])

def get_alias_by_name(b_name):
  board_name = b_name
  try:
    alias = forum.loc[forum.board_name == board_name].alias.values[0]
    return alias 
  except:
    return ""

def get_alias_by_id(p_id):
  p_id = p_id
  alias = post_id.loc[post_id.post_id == p_id].alias.values[0]
  return alias

# clean symbols and spaces 
def cleaning(string):
  if type(string) == str:
    clean_txt = "".join(re.findall(r"[\u4E00-\u9FFF]",string))
  else: 
    clean_txt = ""
  return clean_txt

# tokenization 
def tokenization(post):
  try:
    if len(post) > 1:
      result = segmenter.seg(post)
      return result.tok
    else:
      return post
  except:
      return ""
   
# stopwords 
with open("lib/tasks/Crawler/Dcard/stopwords.txt", encoding="utf-8") as fin:
  stopwords = fin.read().split("\n")[1:]

def no_stop(item):
  no_stop = [x for x in item if x not in stopwords]
  return no_stop

# keywords (for docs more than 100 words)
def keyword(doc):
  keywords = []
  if len(doc) > 100:
    word_count = Counter(doc)
    for w, c in word_count.most_common(3):
      keywords.append(w)
  return keywords

# sentiment 
with open("lib/tasks/Crawler/Dcard/pos.txt", encoding="utf-8") as pos:
  pos_words = pos.read().split("\n")[1:]

with open("lib/tasks/Crawler/Dcard/neg.txt", encoding="utf-8") as neg:
  neg_words = neg.read().split("\n")[1:]

def sentiment(token):
  pos = 0
  neg = 0
  for i in token:
    if i in pos_words:
      pos += 1
    elif  i in neg_words:
      neg += 1
  if pos == 0 and neg == 0:
    return "neutral"
  elif pos > neg:
    return "positive"
  else:
    return "negative"

post_id["alias"] = post_id.board_name.apply(get_alias_by_name)
post["alias"] = post.post_id.apply(get_alias_by_id)
comment["alias"] = comment.post_id.apply(get_alias_by_id)
post["url"] = post.alias
comment["url"] = comment.post_id

for i in range(len(post)):
  post["url"][i] = "https://www.dcard.tw/f/" + str(post["alias"][i]) + "/p/" + str(post["post_id"][i])
for i in range(len(comment)):
  comment["url"][i] = "https://www.dcard.tw/f/" + str(comment["alias"][i]) + "/p/" + str(comment["post_id"][i])

post["source"] = "dcard"
comment["source"] = "dcard"
post["type"] = "post"
comment["type"] = "comment"
post["clean_txt"] = post.post_content.apply(cleaning)
comment["clean_txt"] = comment.comment_content.apply(cleaning)
post["token"] = post.clean_txt.apply(tokenization)
comment["token"] = comment.clean_txt.apply(tokenization)
post["no_stop"] = post.token.apply(no_stop)
comment["no_stop"] = comment.token.apply(no_stop)
post["keywords"] = post.no_stop.apply(keyword)
comment["keywords"] = comment.no_stop.apply(keyword)
post["sentiment"] = post.token.apply(sentiment)
comment["sentiment"] = comment.token.apply(sentiment)

# save as csv
post_id.to_csv("lib/tasks/Crawler/Dcard/post_id.csv")
post.to_csv("lib/tasks/Crawler/Dcard/post_content.csv")
comment.to_csv("lib/tasks/Crawler/Dcard/post_comment.csv")

# succesfully executed!
print("======[python data_cleaning process successfully executed.]=====")