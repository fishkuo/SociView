document.addEventListener("turbolinks:load", () => {
  const art = document.getElementById('article')
  const sen = document.getElementById('sentiment')
  const f_btn = document.getElementById('filter_btn')
  const sort = document.getElementById('sort')
  const sort_n = document.getElementById('sort_new')
  const sort_o = document.getElementById('sort_old')
  const sort_m = document.getElementById('sort_many')
  const sort_l = document.getElementById('sort_less')
  if (f_btn) {
    const post_div = document.querySelectorAll('#post_div')
    const comment_div = document.querySelectorAll('#comment_div')
    const neutral_post = document.querySelectorAll('.neutral_post')
    const positive_post = document.querySelectorAll('.positive_post')
    const negative_post = document.querySelectorAll('.negative_post')
    const neutral_comment = document.querySelectorAll('.neutral_comment')
    const positive_comment = document.querySelectorAll('.positive_comment')
    const negative_comment = document.querySelectorAll('.negative_comment')
    f_btn.addEventListener('click', function () {
      if (art.value == "all") {
        if (sen.value == "all") {
          for (var i = 0; i < post_div.length; i++) {
            post_div[i].style.display = "block"
          }
          for (var i = 0; i < comment_div.length; i++) {
            comment_div[i].style.display = "block"
          }
        } else if (sen.value == "positive") {
          for (var i = 0; i < positive_post.length; i++) {
            positive_post[i].style.display = "block"
          }
          for (var i = 0; i < positive_comment.length; i++) {
            positive_comment[i].style.display = "block"
          }
          for (var i = 0; i < negative_post.length; i++) {
            negative_post[i].style.display = "none"
          }
          for (var i = 0; i < negative_comment.length; i++) {
            negative_comment[i].style.display = "none"
          }
          for (var i = 0; i < neutral_post.length; i++) {
            neutral_post[i].style.display = "none"
          }
          for (var i = 0; i < neutral_comment.length; i++) {
            neutral_comment[i].style.display = "none"
          }
        } else if (sen.value == "negative") {
          for (var i = 0; i < positive_post.length; i++) {
            positive_post[i].style.display = "none"
          }
          for (var i = 0; i < positive_comment.length; i++) {
            positive_comment[i].style.display = "none"
          }
          for (var i = 0; i < negative_post.length; i++) {
            negative_post[i].style.display = "block"
          }
          for (var i = 0; i < negative_comment.length; i++) {
            negative_comment[i].style.display = "block"
          }
          for (var i = 0; i < neutral_post.length; i++) {
            neutral_post[i].style.display = "none"
          }
          for (var i = 0; i < neutral_comment.length; i++) {
            neutral_comment[i].style.display = "none"
          }
        } else {
          for (var i = 0; i < positive_post.length; i++) {
            positive_post[i].style.display = "none"
          }
          for (var i = 0; i < positive_comment.length; i++) {
            positive_comment[i].style.display = "none"
          }
          for (var i = 0; i < negative_post.length; i++) {
            negative_post[i].style.display = "none"
          }
          for (var i = 0; i < negative_comment.length; i++) {
            negative_comment[i].style.display = "none"
          }
          for (var i = 0; i < neutral_post.length; i++) {
            neutral_post[i].style.display = "block"
          }
          for (var i = 0; i < neutral_comment.length; i++) {
            neutral_comment[i].style.display = "block"
          }
        }
      } else if (art.value == "post") {
        if (sen.value == "all") {
          for (var i = 0; i < post_div.length; i++) {
            post_div[i].style.display = "block"
          }
          for (var i = 0; i < comment_div.length; i++) {
            comment_div[i].style.display = "none"
          }
        } else if (sen.value == "positive") {
          for (var i = 0; i < positive_post.length; i++) {
            positive_post[i].style.display = "block"
          }
          for (var i = 0; i < positive_comment.length; i++) {
            positive_comment[i].style.display = "none"
          }
          for (var i = 0; i < negative_post.length; i++) {
            negative_post[i].style.display = "none"
          }
          for (var i = 0; i < negative_comment.length; i++) {
            negative_comment[i].style.display = "none"
          }
          for (var i = 0; i < neutral_post.length; i++) {
            neutral_post[i].style.display = "none"
          }
          for (var i = 0; i < neutral_comment.length; i++) {
            neutral_comment[i].style.display = "none"
          }
        } else if (sen.value == "negative") {
          for (var i = 0; i < positive_post.length; i++) {
            positive_post[i].style.display = "none"
          }
          for (var i = 0; i < positive_comment.length; i++) {
            positive_comment[i].style.display = "none"
          }
          for (var i = 0; i < negative_post.length; i++) {
            negative_post[i].style.display = "block"
          }
          for (var i = 0; i < negative_comment.length; i++) {
            negative_comment[i].style.display = "none"
          }
          for (var i = 0; i < neutral_post.length; i++) {
            neutral_post[i].style.display = "none"
          }
          for (var i = 0; i < neutral_comment.length; i++) {
            neutral_comment[i].style.display = "none"
          }
        } else {
          for (var i = 0; i < positive_post.length; i++) {
            positive_post[i].style.display = "none"
          }
          for (var i = 0; i < positive_comment.length; i++) {
            positive_comment[i].style.display = "none"
          }
          for (var i = 0; i < negative_post.length; i++) {
            negative_post[i].style.display = "none"
          }
          for (var i = 0; i < negative_comment.length; i++) {
            negative_comment[i].style.display = "none"
          }
          for (var i = 0; i < neutral_post.length; i++) {
            neutral_post[i].style.display = "block"
          }
          for (var i = 0; i < neutral_comment.length; i++) {
            neutral_comment[i].style.display = "none"
          }
        }
      } else {
        if (sen.value == "all") {
          for (var i = 0; i < post_div.length; i++) {
            post_div[i].style.display = "none"
          }
          for (var i = 0; i < comment_div.length; i++) {
            comment_div[i].style.display = "block"
          }
        } else if (sen.value == "positive") {
          for (var i = 0; i < positive_post.length; i++) {
            positive_post[i].style.display = "none"
          }
          for (var i = 0; i < positive_comment.length; i++) {
            positive_comment[i].style.display = "block"
          }
          for (var i = 0; i < negative_post.length; i++) {
            negative_post[i].style.display = "none"
          }
          for (var i = 0; i < negative_comment.length; i++) {
            negative_comment[i].style.display = "none"
          }
          for (var i = 0; i < neutral_post.length; i++) {
            neutral_post[i].style.display = "none"
          }
          for (var i = 0; i < neutral_comment.length; i++) {
            neutral_comment[i].style.display = "none"
          }
        } else if (sen.value == "negative") {
          for (var i = 0; i < positive_post.length; i++) {
            positive_post[i].style.display = "none"
          }
          for (var i = 0; i < positive_comment.length; i++) {
            positive_comment[i].style.display = "none"
          }
          for (var i = 0; i < negative_post.length; i++) {
            negative_post[i].style.display = "none"
          }
          for (var i = 0; i < negative_comment.length; i++) {
            negative_comment[i].style.display = "block"
          }
          for (var i = 0; i < neutral_post.length; i++) {
            neutral_post[i].style.display = "none"
          }
          for (var i = 0; i < neutral_comment.length; i++) {
            neutral_comment[i].style.display = "none"
          }
        } else {
          for (var i = 0; i < positive_post.length; i++) {
            positive_post[i].style.display = "none"
          }
          for (var i = 0; i < positive_comment.length; i++) {
            positive_comment[i].style.display = "none"
          }
          for (var i = 0; i < negative_post.length; i++) {
            negative_post[i].style.display = "none"
          }
          for (var i = 0; i < negative_comment.length; i++) {
            negative_comment[i].style.display = "none"
          }
          for (var i = 0; i < neutral_post.length; i++) {
            neutral_post[i].style.display = "none"
          }
          for (var i = 0; i < neutral_comment.length; i++) {
            neutral_comment[i].style.display = "block"
          }
        }
      }
    })
  }
  if (sort) {
    sort_n.addEventListener('click', function () {
      var list_div = document.querySelectorAll('.list')
      var arr = []
      for (var i = 0; i < list_div.length; i++) {
        arr.push(list_div[i])
      }
      arr.sort(function (a, b) {
        return -(Date.parse(a.dataset["time"]) - Date.parse(b.dataset["time"]))
      })
      for (var i = 0; i < arr.length; i++) {
        document.querySelector('.div_list').appendChild(arr[i])
      }
    })
    sort_o.addEventListener('click', function () {
      var list_div = document.querySelectorAll('.list')
      var arr = []
      for (var i = 0; i < list_div.length; i++) {
        arr.push(list_div[i])
      }
      arr.sort(function (a, b) {
        return Date.parse(a.dataset["time"]) - Date.parse(b.dataset["time"])
      })
      for (var i = 0; i < arr.length; i++) {
        document.querySelector('.div_list').appendChild(arr[i])
      }
    })
    sort_m.addEventListener('click', function () {
      var list_div = document.querySelectorAll('.list')
      var arr = []
      for (var i = 0; i < list_div.length; i++) {
        arr.push(list_div[i])
      }
      arr.sort(function (a, b) {
        return -(a.getAttribute('like_count') - b.getAttribute('like_count'))
      })
      for (var i = 0; i < arr.length; i++) {
        document.querySelector('.div_list').appendChild(arr[i])
      }
    })
    sort_l.addEventListener('click', function () {
      var list_div = document.querySelectorAll('.list')
      var arr = []
      for (var i = 0; i < list_div.length; i++) {
        arr.push(list_div[i])
      }
      arr.sort(function (a, b) {
        return a.getAttribute('like_count') - b.getAttribute('like_count')
      })
      for (var i = 0; i < arr.length; i++) {
        document.querySelector('.div_list').appendChild(arr[i])
      }
    })
  }
  var btnNum = Math.ceil(arr_block.length / 10);
  console.log(btnNum)

  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', changePage.bind(this, (i + 1), ary))

    function changePage(page, data) {
      var items = 10
      var pageIndexStart = (page - 1) * items
      var pageIndexEnd = page * items
      var str = ''
      for (var i = pageIndexStart; i < pageIndexEnd; i++) {
        if (i >= data.length) {
          break;
        }
        str += `<div class="box">${data[i]}</div>`
      }
      document.querySelector('.content').innerHTML = str
    }
  }
})