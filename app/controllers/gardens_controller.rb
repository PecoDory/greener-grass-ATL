class GardensController < ApplicationController
  before_action :set_garden, only: %i[show update destroy]

  # GET /gardens
  def index
    @gardens = Garden.all

    render json: @gardens
  end

  # GET /gardens/1
  def show
    render json: @garden
  end

  # POST /gardens
  def create
    @garden = Garden.new(garden_params)
    @garden.user = current_user
    # this is the logged in user
    if @garden.save
      render json: @garden, status: :created, location: @garden
    else
      render json: @garden.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /gardens/1
  def update
    if @garden.update(garden_params)
      render json: @garden
    else
      render json: @garden.errors, status: :unprocessable_entity
    end
  end

  # DELETE /gardens/1
  def destroy
    @garden.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_garden
    @garden = Garden.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def garden_params
    params.require(:garden).permit(:name, :location, :address, :image_url, :user_id)
  end
end
