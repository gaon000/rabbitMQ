var amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', (err, con) =>{
  if (err)
    throw err;
  con.createChannel((err1, channel)=>{
    if(err1)
      throw err1

    var queue = 'hello'
    var msg = 'hello world'
    channel.assertQueue(queue, {
      durable:false
    })
    channel.sendToQueue(queue, Buffer.from(msg))
    console.log("[x] Sent %s", msg)
  })
  setTimeout(()=>{
    con.close()
    process.exit(0)
  }, 500)
})
