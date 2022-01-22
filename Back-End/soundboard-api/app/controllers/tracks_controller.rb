class TracksController < ApplicationController
  def index
    render json: Track.all
  end
end
