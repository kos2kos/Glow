class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :text
      t.string :image_url
      t.integer :user_id
      t.references :conversation, foreign_key: true

      t.timestamps
    end
  end
end
