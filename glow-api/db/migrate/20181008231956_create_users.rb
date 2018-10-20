class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.integer :conversation_id, :default => -1
      t.string :password
      t.string :username
    

      t.timestamps
    end
  end
end
