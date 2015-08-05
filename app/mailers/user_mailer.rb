class UserMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.welcome.subject
  #
	def welcome(user)
		@greeting = "Hello #{user.firstname}. Thank you for stopping by."

		mail to: user.email, subject: "Thank you! #{user.firstname.upcase}", from: "sokpheakc@gmail.com"

	end

end