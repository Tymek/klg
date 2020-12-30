const fs = require('fs')
const path = require('path')

const generateContactDetails = (email, phone) => {
  const file = path.resolve(__dirname, '../static/contact.json')
  const contact = require(file)

  if (email !== undefined) {
    contact.email = email
  }

  if (phone !== undefined) {
    contact.phone = phone
  }

  if (email || phone) {
    console.log(">>> Replacing contact details")

    const data = JSON.stringify(contact, null, 2)
    fs.writeFileSync(file, data)
  }
}

generateContactDetails(process.env.EMAIL, process.env.PHONE_NUMBER)
