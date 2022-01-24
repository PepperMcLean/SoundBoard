class SongsController < ApplicationController
  def create
    render json: currentSong = Song.create(title: params["title"], artist: params["artist"])
    tracksInSong = params["active_tracks"]
    for t in tracksInSong do
      currentSong.tracks << Track.find_by_id(t["id"].to_int)
    end
  end
end
