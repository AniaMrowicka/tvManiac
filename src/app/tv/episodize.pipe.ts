import { Pipe, PipeTransform } from '@angular/core'
import { Episode } from './tv.models'

// type EpisodizeInput ={
//   season: Episode['season'],
//   number: Episode['number'],
// }
type EpisodizeInput = Pick<Episode, 'season' | 'number'>

// type EpisodeWithNoImage = Omit<Episode, 'image'>
@Pipe({
  name: 'episodize',
})
export class EpisodizePipe implements PipeTransform {
  transform(episode: EpisodizeInput, uppercase = false): string {
    const padd = (value: number) => (value > 9 ? value : `0${value}`)
    // const paddedNumber = padd(episode.number)
    //     // const paddedSeason = padd(episode.season)
    const [paddedNumber, paddedSeason] = [episode.number, episode.season].map(padd)
    return uppercase ? `S${paddedSeason}E${paddedNumber}` : `s${paddedSeason}s${paddedNumber}`
  }
}
