'use strict';

module.exports = async (ctx, next) => {

  console.log("I am a global policy and I am running!")
  console.log(Object.keys(ctx.request.body))
  console.log(ctx.request.body.operationName)
  console.log(ctx.request.body.title)
  return await next()
}
