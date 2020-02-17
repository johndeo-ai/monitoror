import TileStatus from '@/enums/tileStatus'
import TileAuthor from '@/interfaces/tileAuthor'

export default interface TileBuild {
  previousStatus?: TileStatus,
  id?: string,
  branch?: string,
  author?: TileAuthor,
  duration?: number,
  estimatedDuration?: number,
  startedAt?: number,
  finishedAt?: number,
}
