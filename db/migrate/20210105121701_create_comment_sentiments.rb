class CreateCommentSentiments < ActiveRecord::Migration[6.0]
  def change
    create_table :comment_sentiments do |t|

      t.timestamps
    end
  end
end