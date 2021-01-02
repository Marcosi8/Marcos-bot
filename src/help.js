const help = (prefix) => {
	return `> ∆ _COMANDOS ABAIXO_ ⇩⇩ ∆
̑ͮͫͭͥͦͣ̔͒͑͑̅͊́͋͊͗͑̓̍̽ͬ̋̎̓ͧ͂̊̉ͣ̉ͩ̀̈̏̍ͭ̒͒͂̍̇̐̿ͨͦ̑͑̃̎͒̋͌̌̈́ͩ̔ͩ̉̿̐ͭ̂͛͊ͩ̔͋ͭͩ͑̆̇͊ͫ̃͋̋ͪͦ͐̈́͗ͭ̒̐̿̃͂́̅̉͊ͧͫ̔̄̿̓́̀̄̾ͨ̍ͨͩͩͮ̑ͭͧͦͣ̽̃͛̔̇ͣ̂͗ͪ͛̈́̆ͮͧ̈̔́͛́͊̇͒ͭ̓ͬ̅̑̊ͩ͆̌ͩ͑̒͊ͭ̀̃̏̅̏ͦͣ̏̿ͬ͂̿ͣ́̓͌ͥ̍ͦ̊̄̆̿̿̈́̅̄̐̎͌͋ͦ͋͂ͨ̂̈͂̉̈́̀̒̃̈́͂̃ͤͪ̎͋̆ͤ̽̇ͩ̑ͨ̽͊ͦͩ̓̎̑̎̆̉ͮ̄͑̆͌ͨ̓̀̋ͤͥͯ͋͑ͧ̆̋ͨͯ̔̑̽͗ͬ͒̀̓͐ͯ̏͆̏ͣ̌͌ͩ̏́̈͂̃͋͛̔ͣ̓̓̇̉ͪͩͯ͛̍͑ͯͨͫͯ̔ͯ̾̓͊͐ͯ̑̌̋̽̈́̏̒ͭ͗̐̇͛̅̍̒̐͌͛̿ͧ͐ͭͣͭ͌̋ͩ̄͌̍̎̽̍ͪ̿ͮͦ͐ͮͪ̇̒͛ͬͦ̏̐̀͊ͮ̓̀͂́͋̾̄̃̐̅̍̉ͫ͂͐̄͗̆̽ͩ̾̾ͤͦ̽̏ͫ̄̓ͫ̍̔ͣ̾̍̍͛ͩ̆ͫ́ͭ͛̂̒ͣ̆̏͌̄ͬ̃̎ͧͧͯ̐ͫ̓̽͆ͪ̚̚̚̚̚                                     
̑ͮͫͭͥͦͣ̔͒͑͑̅͊́͋͊͗͑̓̍̽ͬ̋̎̓ͧ͂̊̉ͣ̉ͩ̀̈̏̍ͭ̒͒͂̍̇̐̿ͨͦ̑͑̃̎͒̋͌̌̈́ͩ̔ͩ̉̿̐ͭ̂͛͊ͩ̔͋ͭͩ͑̆̇͊ͫ̃͋̋ͪͦ͐̈́͗ͭ̒̐̿̃͂́̅̉͊ͧͫ̔̄̿̓́̀̄̾ͨ̍ͨͩͩͮ̑ͭͧͦͣ̽̃͛̔̇ͣ̂͗ͪ͛̈́̆ͮͧ̈̔́͛́͊̇͒ͭ̓ͬ̅̑̊ͩ͆̌ͩ͑̒͊ͭ̀̃̏̅̏ͦͣ̏̿ͬ͂̿ͣ́̓͌ͥ̍ͦ̊̄̆̿̿̈́̅̄̐̎͌͋ͦ͋͂ͨ̂̈͂̉̈́̀̒̃̈́͂̃ͤͪ̎͋̆ͤ̽̇ͩ̑ͨ̽͊ͦͩ̓̎̑̎̆̉ͮ̄͑̆͌ͨ̓̀̋ͤͥͯ͋͑ͧ̆̋ͨͯ̔̑̽͗ͬ͒̀̓͐ͯ̏͆̏ͣ̌͌ͩ̏́̈͂̃͋͛̔ͣ̓̓̇̉ͪͩͯ͛̍͑ͯͨͫͯ̔ͯ̾̓͊͐ͯ̑̌̋̽̈́̏̒ͭ͗̐̇͛̅̍̒̐͌͛̿ͧ͐ͭͣͭ͌̋ͩ̄͌̍̎̽̍ͪ̿ͮͦ͐ͮͪ̇̒͛ͬͦ̏̐̀͊ͮ̓̀͂́͋̾̄̃̐̅̍̉ͫ͂͐̄͗̆̽ͩ̾̾ͤͦ̽̏ͫ̄̓ͫ̍̔ͣ̾̍̍͛ͩ̆ͫ́ͭ͛̂̒ͣ̆̏͌̄ͬ̃̎ͧͧͯ̐ͫ̓̽͆ͪ̚̚̚̚̚ 
̑ͮͫͭͥͦͣ̔͒͑͑̅͊́͋͊͗͑̓̍̽ͬ̋̎̓ͧ͂̊̉ͣ̉ͩ̀̈̏̍ͭ̒͒͂̍̇̐̿ͨͦ̑͑̃̎͒̋͌̌̈́ͩ̔ͩ̉̿̐ͭ̂͛͊ͩ̔͋ͭͩ͑̆̇͊ͫ̃͋̋ͪͦ͐̈́͗ͭ̒̐̿̃͂́̅̉͊ͧͫ̔̄̿̓́̀̄̾ͨ̍ͨͩͩͮ̑ͭͧͦͣ̽̃͛̔̇ͣ̂͗ͪ͛̈́̆ͮͧ̈̔́͛́͊̇͒ͭ̓ͬ̅̑̊ͩ͆̌ͩ͑̒͊ͭ̀̃̏̅̏ͦͣ̏̿ͬ͂̿ͣ́̓͌ͥ̍ͦ̊̄̆̿̿̈́̅̄̐̎͌͋ͦ͋͂ͨ̂̈͂̉̈́̀̒̃̈́͂̃ͤͪ̎͋̆ͤ̽̇ͩ̑ͨ̽͊ͦͩ̓̎̑̎̆̉ͮ̄͑̆͌ͨ̓̀̋ͤͥͯ͋͑ͧ̆̋ͨͯ̔̑̽͗ͬ͒̀̓͐ͯ̏͆̏ͣ̌͌ͩ̏́̈͂̃͋͛̔ͣ̓̓̇̉ͪͩͯ͛̍͑ͯͨͫͯ̔ͯ̾̓͊͐ͯ̑̌̋̽̈́̏̒ͭ͗̐̇͛̅̍̒̐͌͛̿ͧ͐ͭͣͭ͌̋ͩ̄͌̍̎̽̍ͪ̿ͮͦ͐ͮͪ̇̒͛ͬͦ̏̐̀͊ͮ̓̀͂́͋̾̄̃̐̅̍̉ͫ͂͐̄͗̆̽ͩ̾̾ͤͦ̽̏ͫ̄̓ͫ̍̔ͣ̾̍̍͛ͩ̆ͫ́ͭ͛̂̒ͣ̚̚̚̚̚
̑ͮͫͭͥͦͣ̔͒͑͑̅͊́͋͊͗͑̓̍̽ͬ̋̎̓ͧ͂̊̉ͣ̉ͩ̀̈̏̍ͭ̒͒͂̍̇̐̿ͨͦ̑͑̃̎͒̋͌̌̈́ͩ̔ͩ̉̿̐ͭ̂͛͊ͩ̔͋ͭͩ͑̆̇͊ͫ̃͋̋ͪͦ͐̈́͗ͭ̒̐̿̃͂́̅̉͊ͧͫ̔̄̿̓́̀̄̾ͨ̍ͨͩͩͮ̑ͭͧͦͣ̽̃͛̔̇ͣ̂͗ͪ͛̈́̆ͮͧ̈̔́͛́͊̇͒ͭ̓ͬ̅̑̊ͩ͆̌ͩ͑̒͊ͭ̀̃̏̅̏ͦͣ̏̿ͬ͂̿ͣ́̓͌ͥ̍ͦ̊̄̆̿̿̈́̅̄̐̎͌͋ͦ͋͂ͨ̂̈͂̉̈́̀̒̃̈́͂̃ͤͪ̎͋̆ͤ̽̇ͩ̑ͨ̽͊ͦͩ̓̎̑̎̆̉ͮ̄͑̆͌ͨ̓̀̋ͤͥͯ͋͑ͧ̆̋ͨͯ̔̑̽͗ͬ͒̀̓͐ͯ̏͆̏ͣ̌͌ͩ̏́̈͂̃͋͛̔ͣ̓̓̇̉ͪͩͯ͛̍͑ͯͨͫͯ̔ͯ̾̓͊͐ͯ̑̌̋̽̈́̏̒ͭ͗̐̇͛̅̍̒̐͌͛̿ͧ͐ͭͣͭ͌̋ͩ̄͌̍̎̽̍ͪ̿ͮͦ͐ͮͪ̇̒͛ͬͦ̏̐̀͊ͮ̓̀͂́͋̾̄̃̐̅̍̉ͫ͂͐̄͗̆̽ͩ̾̾ͤͦ̽̏ͫ̄̓ͫ̍̔ͣ̾̍̍͛ͩ̆ͫ́ͭ͛̂̒ͣ̆̏͌̄ͬ̃̎ͧͧͯ̐ͫ̓̽͆ͪ̑ͮͫͭͥͦͣ̔͒͑͑̅͊́͋͊͗͑̓̍̽ͬ̋̎̓ͧ͂̊̉ͣ̉ͩ̀̈̏̍ͭ̒͒͂̍̇̐̿ͨͦ̑͑̃̎͒̋͌̌̈́ͩ̔ͩ̉̿̐ͭ̂͛͊ͩ̔͋ͭͩ͑̆̇͊ͫ̃͋̋ͪͦ͐̈́͗ͭ̒̐̿̃͂́̅̉͊ͧͫ̔̄̿̓́̀̄̾ͨ̍ͨͩͩͮ̑ͭͧͦͣ̽̃͛̔̇ͣ̂͗ͪ͛̈́̆ͮͧ̈̔́͛́͊̇͒ͭ̓ͬ̅̑̊ͩ͆̌ͩ͑̒͊ͭ̀̃̏̅̏ͦͣ̏̿ͬ͂̿ͣ́̓͌ͥ̍ͦ̊̄̆̿̿̈́̅̄̐̎͌͋ͦ͋͂ͨ̂̈͂̉̈́̀̒̃̈́͂̃ͤͪ̎͋̆ͤ̽̇ͩ̑ͨ̽͊ͦͩ̓̎̑̎̆̉ͮ̄͑̆͌ͨ̓̀̋ͤͥͯ͋͑ͧ̆̋ͨͯ̔̑̽͗ͬ͒̀̓͐ͯ̏͆̏ͣ̌͌ͩ̏́̈͂̃͋͛̔ͣ̓̓̇̉ͪͩͯ͛̍͑ͯͨͫͯ̔ͯ̾̓͊͐ͯ̑̚̚̚̚̚̚̚̚̚̚ _Olá_ 👋 
 _PREFIXO_- ${prefix}


 ☾ *COMANDOS* ☽
   

   ┠➠ *${prefix}sticker* ou *${prefix}stiker*
   ╿𝘜𝘵𝘪𝘭𝘪𝘥𝘢𝘥𝘦: Converter imagem / gif / vídeo em adesivo! ( _APENAS VÍDEOS COM MENOS DE 8 SEGUNDOS_ )
   ╿𝘌𝘹𝘦𝘮𝘱𝘭𝘰: Responder imagem ou vídeo ou enviar imagem / gif / vídeo com legenda

   ┠➠ *${prefix}info* 
   ╿𝘜𝘵𝘪𝘭𝘪𝘥𝘢𝘥𝘦: Mostra informações sobre o bot!
   ╿𝘌𝘹𝘦𝘮𝘱𝘭𝘰: Digite ${prefix}info

   ┠➠ *${prefix}foto* 
   ╿𝘜𝘵𝘪𝘭𝘪𝘥𝘢𝘥𝘦: Transforma qualquer figurinha que você marcar em imagem!
   ╿𝘌𝘹𝘦𝘮𝘱𝘭𝘰: Marque a figurinha e Digite ${prefix}foto ( _não funciona com figurinha animada_ )

   ┠➠ *${prefix}gtts* 
   ╿𝘜𝘵𝘪𝘭𝘪𝘥𝘢𝘥𝘦: Converter texto em fala / áudio
   ╿𝘌𝘹𝘦𝘮𝘱𝘭𝘰: digite gtts + o texto e o idioma falado! *exp*: ${prefix}gtts pt olá mundo.
   
   ┠➠ *${prefix}wrocurar
   ╿𝘜𝘵𝘪𝘭𝘪𝘥𝘢𝘥𝘦: Procura o episódio do anime da foto que você enviar!
   ╿𝘌𝘹𝘦𝘮𝘱𝘭𝘰: Mande a foto do anime (ou responda) com a legenda ${prefix}procurar

☾ *COMANDOS PARA GRUPOS* ☽

_NOTA_: Para executar esses comandos o bot precisa ser adm!

*obs*: Apenas adm's do grupo podem executar esses comandos.

   ┠➠*${prefix}simih 1* e *${prefix}simih 0*
   ╿𝘜𝘵𝘪𝘭𝘪𝘥𝘢𝘥𝘦: Ativa a inteligência artificial simisimi que conversa com você no grupo!
   ╿𝘌𝘹𝘦𝘮𝘱𝘭𝘰: Digite .${prefix}imih 1 para ativar e ${prefix}simih 0 para desativar!
( *OBS: O SIMI ESTÁ TOTALMENTE EM INDONÉSIO* )

   ┠➠ *${prefix}bemvindo 1*
   ╿𝘜𝘵𝘪𝘭𝘪𝘥𝘢𝘥𝘦: Ativa o saudações para novos membros! ${prefix}bemvindo 0 desativa.
   ╿𝘌𝘹𝘦𝘮𝘱l𝘰: Digite ${prefix}bemvindo

   ┠➠ *${prefix}mencionar*
   ╿𝘜𝘵𝘪𝘭𝘪𝘥𝘢𝘥𝘦: Marca todos os membros do grupo, incluindo administradores!
   ╿𝘌𝘹𝘦𝘮𝘱l𝘰: Digite ${prefix}mencionar
   
   ┠➠ *${prefix}add*
   ╿𝘜𝘵𝘪𝘭𝘪𝘥𝘢𝘥𝘦: Adiciona um novo membro.
   ╿𝘌𝘹𝘦𝘮𝘱l𝘰: Digite ${prefix}add e o número do membro com o código do país sem o +
   
   ┠➠ *${prefix}clone*
   ╿𝘜𝘵𝘪𝘭𝘪𝘥𝘢𝘥𝘦: Pega a foto de perfil do usuário marcado e adiciona no bot! 
   ╿𝘌𝘹𝘦𝘮𝘱l𝘰: Digite ${prefix}clone e o @ do membro

   ┠➠ *${prefix}promote*
   ╿𝘜𝘵𝘪𝘭𝘪𝘥𝘢𝘥𝘦: Promove um membro a adm
   ╿𝘌𝘹𝘦𝘮𝘱l𝘰: Digite ${prefix}promote e o @ do membro
   
   ┠➠ *${prefix}demote*
   ╿𝘜𝘵𝘪𝘭𝘪𝘥𝘢𝘥𝘦: Rebaixa adms
   ╿𝘌𝘹𝘦𝘮𝘱l𝘰: Digite ${prefix}demote e o @ do adm

 ☾ 𝙾𝚄𝚃𝚁𝙾𝚂 𝙲𝙾𝙼𝙰ndos ☽
   
   ┠➠ *${prefix}admista* 
   ╿𝘜𝘵𝘪𝘭𝘪𝘥𝘢𝘥𝘦: Mostra a lista dos adms
   ╿𝘌𝘹𝘦𝘮𝘱𝘭𝘰: Digite ${prefix}admlista

   ┠➠ *${prefix}simi*
   ╿𝘜𝘵𝘪𝘭𝘪𝘥𝘢𝘥𝘦: Pergunta algo ao simi!
   ╿𝘌𝘹𝘦𝘮𝘱𝘭𝘰: Digite .simi + oque você deseja perguntar! e ele te respondera em indonésio.

   ┠➠ *${prefix}nsfwloli* 
   ╿𝘜𝘵𝘪𝘭𝘪𝘥𝘢𝘥𝘦: imagens aleatórias de nsfw loli
   ╿𝘌𝘹𝘦𝘮𝘱𝘭𝘰: Apenas envie o comando.

   ┠➠ *${prefix}ocr*
   ╿𝘜𝘵𝘪𝘭𝘪𝘥𝘢𝘥𝘦: Manda o texto de qualquer imagem que quiser!   
   ╿𝘌𝘹𝘦𝘮𝘱𝘭𝘰: Mande uma imagem (que tenha texto) com a legenda ".ocr"

   ┠➠ *${prefix}url2img*
   ╿𝘜𝘵𝘪𝘭𝘪𝘥𝘢𝘥𝘦: Tira print de sites!
   ╿𝘌𝘹𝘦𝘮𝘱𝘭𝘰: Digite .url2img + tipo de print e o URL.

_COMANDOS DO DONO DO BOT_

   ┠➠ *${prefix}setprefix* 
   ╿𝘜𝘵𝘪𝘭𝘪𝘥𝘢𝘥𝘦: Mudar o prefixo do bot
   ╿𝘌𝘹𝘦𝘮𝘱𝘭𝘰: Digite ${prefix}setprefix e o prefixo selecionado
   
   ┠➠ *${prefix}bc* 
   ╿𝘜𝘵𝘪𝘭𝘪𝘥𝘢𝘥𝘦: broadcast
   ╿𝘌𝘹𝘦𝘮𝘱𝘭𝘰: Digite ${prefix}bc e a mensagem
   
   ┠➠ *${prefix}clearall* 
   ╿𝘜𝘵𝘪𝘭𝘪𝘥𝘢𝘥𝘦: Limpa os chats do bot.
   ╿𝘌𝘹𝘦𝘮𝘱𝘭𝘰: Digite ${prefix}clearall`
}

exports.help = help


