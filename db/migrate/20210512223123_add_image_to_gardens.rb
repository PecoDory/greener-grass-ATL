class AddImageToGardens < ActiveRecord::Migration[6.1]
  def change
    add_column :gardens, :image_url, :text
  end
end
