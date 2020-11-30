module Api
    module V1
        class CoursesController < ApplicationController
            protect_from_forgery with: :null_session
            def index
                courses = Course.all
                render json: CourseSerializer. new(courses, options).serialized_json
            end

            def show
                course = Course.find_by(slug: params[:slug])
                render json: CourseSerializer. new(course, options).serialized_json
            end

            def create
                course = Course.new(course_params)

                if course.save 
                    render json: CourseSerializer.new(course).serialized_json
                else
                    render json: {error: course.error.messages}, status: 422
                end
            end


            def update
                course = Course.find_by(slug: params[:slug])

                if course.update(course_params)
                    render json: CourseSerializer.new(course).serialized_json
                else
                    render json: {error: course.error.messages}, status: 422
                end
            end

            def destroy
                course = Course.find_by(slug: params[:slug])

                if course.destroy
                    head :no_content
                else
                    render json: {error: course.error.messages}, status: 422
                end
            end

            private

            def course_params
                params.permit(:name, :image_url)
            end

            def options
                @options ||= {include: %i[reviews]}
            end
        end
    end
end