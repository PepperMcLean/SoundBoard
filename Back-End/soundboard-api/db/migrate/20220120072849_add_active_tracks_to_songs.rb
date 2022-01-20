class AddActiveTracksToSongs < ActiveRecord::Migration[6.1]
  def change
    add_column :songs, :activetracks, :string
  end
end
