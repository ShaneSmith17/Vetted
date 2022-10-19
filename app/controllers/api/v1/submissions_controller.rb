class Api::V1::SubmissionsController < ApiController 
  
  def index 
    submissions = Submission.all
    render json: submissions
  end
  
end 