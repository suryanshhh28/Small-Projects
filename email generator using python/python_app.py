from email.message import EmailMessage
from password import pw
import ssl
import smtplib

email_sender = 'YOUR EMAIL GOES HERE'
email_pw = pw

email_receiver = 'RECEIVERS EMAIL GOES HERE'

subject = 'Hi, thanks for subscribing to the new letter! Kudos'

body = '''You will be getting all the updates from my side now! As soon as I publish a new article or blog on my 
hashnode , you would be viewing it first also if I update anything on my twitter or linkedin account you will be the 
one getting regularly update Thanks! Cheers my friend!'''

em = EmailMessage()
em['From'] = email_sender
em['To'] = email_receiver
em['subject'] = subject
em.set_content(body)

context = ssl.create_default_context()

with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
    smtp.login(email_sender, email_pw)
    smtp.sendmail(email_sender, email_receiver, em.as_string())

