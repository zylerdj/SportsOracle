#!/usr/bin/env ts-node

import {updateEscrowStatus} from './index';


( async ()=>{

  let gameId = process.argv[2]
  console.log(gameId)
  let bet = await updateEscrowStatus(gameId)

  console.log(bet)
})()

