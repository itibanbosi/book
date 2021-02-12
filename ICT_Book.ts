
enum onoff {
  ON,
  OFF,
}


enum etc {
  AKARUSA,
  JINKAN,
}



//% color="#74ad1d" block="ﾕｰﾚｶ_ICT_Book"
namespace eureka_blocks {

    //% blockId=eureka_buz_set
    //% block=ﾕｰﾚｶIOﾎﾞｯｸｽで音をならす
    // group="1 設定"
    //% color="#ff3d03"
    //% weight=90

    export function eureka_buz_set() {
    pins.analogSetPitchPin(AnalogPin.P8);
  }

  //% color="#1E90FF" weight=89 block="待ち時間（秒）|%second|" group="1 設定"
  //% second.min=0 second.max=10
  export function driveForwards(second: number): void {
    basic.pause(second * 1000);
  }


    //% color="#4741f1" weight=99 blockId=eureka_tl_blue block="青信号 点灯|%mode|" group="2_信号機ユニット"
    export function eureka_tl_blue(mode: onoff) {
    
        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P14, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P14, 0);
        }

  }

  //% color="#ffd700" weight=97 blockId=eureka_tl_yellow block="黄信号 点灯|%mode|" group="2_信号機ユニット"
  export function eureka_tl_yellow(mode: onoff) {

        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P13, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P13, 0);
        }
  }

  //% color="#ff4940" weight=95 blockId=eureka_tl_red block="赤信号 点灯|%mode|" group="2_信号機ユニット"
  export function eureka_tl_red(mode: onoff) {

        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P0, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P0, 0);
        }
  }



  //% color="#ff8c00"  weight=80 block="光ｾﾝｻ値 |%limit| より暗い" group="3_電気の利用ユニット"
  //% limit.min=0 limit.max=100
  export function decideLight(limit: number){

        if ((pins.analogReadPin(AnalogPin.P1) / 1023) * 100 < limit) {
          return true;
        } else {
          return false;
        }
    }


  //% color="#ff8c00"  weight=78 blockId=eureka_denkitemp block="光ｾﾝｻ値" group="3_電気の利用ユニット"
  export function eureka_denkitemp(): number {
        return Math.round((pins.analogReadPin(AnalogPin.P1) / 1023) * 100);
  }

  //% color="#ff8c00"  weight=76 blockId=eureka_denkilight_disp block="光ｾﾝｻの値を表示する" group="3_電気の利用ユニット"
  export function eureka_denkilight(){
         basic.showNumber(Math.round((pins.analogReadPin(AnalogPin.P1) / 1023) * 100));
  }




  //% color="#009A00" weight=74 block="人が動いたら" group="3_電気の利用ユニット"
  export function humanDetection(): boolean {
    pins.setPull(DigitalPin.P16, PinPullMode.PullNone);
        if (pins.digitalReadPin(DigitalPin.P16) == 1) {
          return true;
        } else {
          return false;
        }
  }

  //% color="#009A00"  weight=72 blockId=eureka_denkihuman block="人感ｾﾝｻ値" group="3_電気の利用ユニット"
  export function eureka_denkihuman(): number {
        pins.setPull(DigitalPin.P16, PinPullMode.PullNone);
        return pins.digitalReadPin(DigitalPin.P16);
  }

  //% color="#009A00"  weight=70 blockId=eureka_denkihuman_disp block="人感ｾﾝｻの値を表示する" group="3_電気の利用ユニット"
  export function eureka_denkihumandisp() {
        basic.showNumber(pins.digitalReadPin(DigitalPin.P16));
  }



  //% color="#a9a9a9" weight=86 blockId=eureka_denkiwhite block="白LED |%mode|" group="3_電気の利用ユニット"
  export function eureka_denkiwhite(mode: onoff) {

        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P15, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P15, 0);
        }
    }

  //% color="#e439b6" weight=58 blockId=eureka_relay block="ﾘﾚｰ(ﾃﾞｼﾞﾀﾙ出力) |%mode|" group="4_ユーレカ装置"
  export function eureka_relay(mode: onoff) {
        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P15, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P15, 0);
        }
  }

  //% color="#e439b6" weight=56 blockId=eureka_relay_2 block="ﾘﾚｰ(ｱﾅﾛｸﾞ出力) |%limit| |%syuturyoku|" group="4_ユーレカ装置"
  //% syuturyoku.min=0 syuturyoku.max=1023
  export function eureka_relay_2(syuturyoku: number) {
        return pins.analogWritePin(AnalogPin.P15, syuturyoku);
  }

}


