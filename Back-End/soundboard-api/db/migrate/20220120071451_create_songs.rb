class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.references :user, null: false, foreign_key: true
      t.string :active_tracks

      t.timestamps
    end
  end
end
