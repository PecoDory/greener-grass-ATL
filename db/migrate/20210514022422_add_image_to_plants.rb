class AddImageToPlants < ActiveRecord::Migration[6.1]
  def change
    add_column :plants, :image_url, :text
  end
end
