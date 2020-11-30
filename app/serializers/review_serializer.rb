class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :course_id
end
