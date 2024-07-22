import {blockContentType} from './schemaTypes/blockContentType'
import {categoryType} from './schemaTypes/categoryType'
import {postType} from './schemaTypes/postType'
import {authorType} from './schemaTypes/authorType'
import {vagasType} from './schemaTypes/vagasType'
import {gameType} from './schemaTypes/gameType'

export const schema = {
  types: [blockContentType, categoryType, postType, authorType, vagasType, gameType],
}
