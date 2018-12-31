import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'

export function getSingerList() {
    let url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

    const data = Object.assign({}, commonParams, {
        channel: 'singer',
        page: 'list',
        key: 'all_all_all',
        pagesize: 100,
        pagenum: 1,
        loginUin: 0,
        hostUin: 0,
        needNewCode: 0
    })

    return jsonp(url, data, options)
}

export function getSingerDetail(singerId) {
    let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

    const data = Object.assign({}, commonParams, {
        hostUin: 0,
        needNewCode: 0,
        paltform: 'yqq',
        order: 'listen',
        begin: 0,
        num: 100,
        songsstatus: 1,
        singermid: singerId,
        g_tk: 1664029744
    })

    return jsonp(url, data, options)
}

export function getSongVkey (songmid) { // 获取歌曲的vkey
    const url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'
    const data = Object.assign({}, {
      callback: 'musicJsonCallback',
      loginUin: 3051522991,
      format: 'jsonp',
      platform: 'yqq',
      needNewCode: 0,
      cid: 205361747,
      uin: 3051522991,
      guid: 5931742855,
      songmid: songmid,
      filename: `C400${songmid}.m4a`
    })
    return jsonp(url, data)
  }