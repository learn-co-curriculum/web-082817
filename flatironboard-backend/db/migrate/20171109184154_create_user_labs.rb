class CreateUserLabs < ActiveRecord::Migration[5.1]
  def change
    create_table :user_labs do |t|
      t.references :user, foreign_key: true
      t.references :lab, foreign_key: true

      t.timestamps
    end
  end
end
