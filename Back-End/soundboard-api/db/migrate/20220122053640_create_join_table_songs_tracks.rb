class CreateJoinTableSongsTracks < ActiveRecord::Migration[6.1]
  def change
    create_join_table :songs, :tracks do |t|
      t.index :song_id
      t.index :track_id
    end
  end
end
