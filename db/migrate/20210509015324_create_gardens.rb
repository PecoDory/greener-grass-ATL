class CreateGardens < ActiveRecord::Migration[6.1]
  def change
    create_table :gardens do |t|
      t.string :name
      t.text :location
      t.text :address
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
