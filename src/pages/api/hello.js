export default function handler(req, res) {
  let response = await fetch('https://api.twitter.com/1.1/statuses/update.json?status=hello', {
		headers: {
			"authorization": "OAuth",
			"oauth_consumer_key": "",
      "oauth_nonce": "",
      "oauth_signature": "",
      "oauth_signature_method": "HMAC-SHA1",
      "oauth_timestamp": "generated_timestamp",
      "oauth_token": "",
      "oauth_version": "1.0"
		},
	})
	if (!response.ok) {
		const message = `An error has occured: ${response.status}`
		throw new Error(message)
	}
	return response.json()

  // res.status(200).json({ name: 'John Doe' })

}
