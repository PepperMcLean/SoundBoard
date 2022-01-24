class SongsController < ApplicationController
  def create
    render json: currentSong = Song.create(title: params["title"], artist: params["artist"])
    tracksInSong = params["active_tracks"]
    for t in tracksInSong do
      currentSong.tracks << Track.find_by_id(t["id"].to_int)
    end
  end

  def index
    songs = Song.all
    songTracks = []
    songs.each do |s|
      songTracks << s
      songTracks << s.tracks
    end
    render json: songTracks
  end
end
