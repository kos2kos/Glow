class CreateEmojis < ActiveRecord::Migration[5.2]
  def change
    create_table :emojis do |t|
      t.string :img

      t.timestamps
    end
  end
end
