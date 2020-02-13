'use strict';

module.exports = async (ctx, next) => {

  console.log("I am a global policy and I am running!")

  return await next()
}
