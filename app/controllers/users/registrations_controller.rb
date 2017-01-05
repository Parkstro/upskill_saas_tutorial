class Users::RegistrationsController < Devise::RegistrationsController
  # Extend default devise gem behaivor so that users signing up with Pro
  # savewith a special Stripe subscription function.
  # Otherwise Devise devise signs user up as usual 
  def create
    super do |resource|
      if params[:plan]
        resource.plan_id = params[:plan]
        if resource.plan_id == 2
          resource.save_with_subscription
        else
          resource.save
        end
      end
    end
  end
end