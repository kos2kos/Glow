class CreateEmojiMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :emoji_messages do |t|
      t.integer :emoji_id
      t.integer :message_id

      t.timestamps
    end
  end
end
