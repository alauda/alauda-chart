import { Story, Meta } from '@storybook/html';

import { dealWithTime } from './utilt';

import { Chart } from '@alauda/chart';
import 'uplot/dist/uPlot.min.css';

export default {
  title: 'Line',
} as Meta;

const data = [
  {
    x: 1_675_126_800,
    y: 14.278_352_280_577_337,
    xx: '2023-01-31 09:00:00',
    size: 18.076_191_434_540_05,
  },
  {
    x: 1_675_126_860,
    y: 12.595_799_269_385_57,
    xx: '2023-01-31 09:01:00',
    size: 12.105_945_567_616_22,
  },
  {
    x: 1_675_126_920,
    y: 17.091_859_531_615_533,
    xx: '2023-01-31 09:02:00',
    size: 16.617_317_273_199_25,
  },
  {
    x: 1_675_126_980,
    y: 11.654_719_844_722_454,
    xx: '2023-01-31 09:03:00',
    size: 12.827_904_785_035_654,
  },
  {
    x: 1_675_127_040,
    y: 17.712_094_617_938_966,
    xx: '2023-01-31 09:04:00',
    size: 19.596_451_434_346_786,
  },
  {
    x: 1_675_127_100,
    y: 15.327_771_274_931_418,
    xx: '2023-01-31 09:05:00',
    size: 14.332_852_644_791_075,
  },
  {
    x: 1_675_127_160,
    y: 17.221_243_887_289_898,
    xx: '2023-01-31 09:06:00',
    size: 18.178_681_516_240_474,
  },
  {
    x: 1_675_127_220,
    y: 11.861_465_874_327_964,
    xx: '2023-01-31 09:07:00',
    size: 11.433_444_812_913_766,
  },
  {
    x: 1_675_127_280,
    y: 18.462_037_178_346_392,
    xx: '2023-01-31 09:08:00',
    size: 14.780_148_424_278_536,
  },
  {
    x: 1_675_127_340,
    y: 19.424_601_057_328_744,
    xx: '2023-01-31 09:09:00',
    size: 11.718_374_499_423_026,
  },
  {
    x: 1_675_127_400,
    y: 14.308_928_230_980_527,
    xx: '2023-01-31 09:10:00',
    size: 14.573_011_598_698_319,
  },
  {
    x: 1_675_127_460,
    y: 19.536_197_552_921_475,
    xx: '2023-01-31 09:11:00',
    size: 17.159_562_347_092_75,
  },
  {
    x: 1_675_127_520,
    y: 11.282_310_369_387_154,
    xx: '2023-01-31 09:12:00',
    size: 16.876_336_932_531_57,
  },
  {
    x: 1_675_127_580,
    y: 11.794_816_557_110_263,
    xx: '2023-01-31 09:13:00',
    size: 17.767_742_750_766_423,
  },
  {
    x: 1_675_127_640,
    y: 13.848_679_274_338_37,
    xx: '2023-01-31 09:14:00',
    size: 18.034_310_239_400_494,
  },
  {
    x: 1_675_127_700,
    y: 16.076_296_249_923_036,
    xx: '2023-01-31 09:15:00',
    size: 13.913_331_791_783_346,
  },
  {
    x: 1_675_127_760,
    y: 14.112_992_813_766_756,
    xx: '2023-01-31 09:16:00',
    size: 17.729_945_346_360_836,
  },
  {
    x: 1_675_127_820,
    y: 11.788_020_073_394_986,
    xx: '2023-01-31 09:17:00',
    size: 18.772_158_155_556_24,
  },
  {
    x: 1_675_127_880,
    y: 11.870_224_728_406_342,
    xx: '2023-01-31 09:18:00',
    size: 12.363_406_803_045_255,
  },
  {
    x: 1_675_127_940,
    y: 17.751_313_201_174_224,
    xx: '2023-01-31 09:19:00',
    size: 18.775_472_057_634_925,
  },
  {
    x: 1_675_128_000,
    y: 18.665_337_920_436_055,
    xx: '2023-01-31 09:20:00',
    size: 16.168_936_038_995_74,
  },
  {
    x: 1_675_128_060,
    y: 13.758_426_697_563_38,
    xx: '2023-01-31 09:21:00',
    size: 19.553_425_267_406_18,
  },
  {
    x: 1_675_128_120,
    y: 19.040_332_811_812_423,
    xx: '2023-01-31 09:22:00',
    size: 12.834_053_904_975_377,
  },
  {
    x: 1_675_128_180,
    y: 15.702_500_701_030_996,
    xx: '2023-01-31 09:23:00',
    size: 19.306_059_276_225_22,
  },
  {
    x: 1_675_128_240,
    y: 18.981_133_445_473_816,
    xx: '2023-01-31 09:24:00',
    size: 15.855_716_191_276_821,
  },
  {
    x: 1_675_128_300,
    y: 13.669_731_524_890_262,
    xx: '2023-01-31 09:25:00',
    size: 11.184_487_452_432_784,
  },
  {
    x: 1_675_128_360,
    y: 16.527_570_182_288_69,
    xx: '2023-01-31 09:26:00',
    size: 11.361_560_242_586_775,
  },
  {
    x: 1_675_128_420,
    y: 12.855_842_561_276_72,
    xx: '2023-01-31 09:27:00',
    size: 15.434_810_790_128_882,
  },
  {
    x: 1_675_128_480,
    y: 11.014_402_701_823_757,
    xx: '2023-01-31 09:28:00',
    size: 16.308_126_947_946_79,
  },
  {
    x: 1_675_128_540,
    y: 19.278_877_905_189_407,
    xx: '2023-01-31 09:29:00',
    size: 13.641_658_535_112_766,
  },
  {
    x: 1_675_128_600,
    y: 14.219_190_460_746_08,
    xx: '2023-01-31 09:30:00',
    size: 11.983_250_665_216_005,
  },
  {
    x: 1_675_128_660,
    y: 16.068_048_754_137_273,
    xx: '2023-01-31 09:31:00',
    size: 13.542_147_025_506_054,
  },
  {
    x: 1_675_128_720,
    y: 16.788_408_206_238_01,
    xx: '2023-01-31 09:32:00',
    size: 12.603_513_336_354_421,
  },
  {
    x: 1_675_128_780,
    y: 19.638_948_366_330_528,
    xx: '2023-01-31 09:33:00',
    size: 16.395_718_610_032_272,
  },
  {
    x: 1_675_128_840,
    y: 15.943_823_920_262_602,
    xx: '2023-01-31 09:34:00',
    size: 14.741_016_922_497_92,
  },
  {
    x: 1_675_128_900,
    y: 16.887_887_871_798_753,
    xx: '2023-01-31 09:35:00',
    size: 17.706_983_217_276_715,
  },
  {
    x: 1_675_128_960,
    y: 13.463_264_985_505_07,
    xx: '2023-01-31 09:36:00',
    size: 14.404_429_834_336_119,
  },
  {
    x: 1_675_129_020,
    y: 15.099_600_183_401_321,
    xx: '2023-01-31 09:37:00',
    size: 11.879_868_682_339_875,
  },
  {
    x: 1_675_129_080,
    y: 18.773_487_711_682_638,
    xx: '2023-01-31 09:38:00',
    size: 11.118_596_316_035_115,
  },
  {
    x: 1_675_129_140,
    y: 16.239_119_487_550_116,
    xx: '2023-01-31 09:39:00',
    size: 12.408_462_010_601_909,
  },
  {
    x: 1_675_129_200,
    y: 12.255_596_348_851_853,
    xx: '2023-01-31 09:40:00',
    size: 14.424_427_122_244_149,
  },
  {
    x: 1_675_129_260,
    y: 18.283_084_272_292_385,
    xx: '2023-01-31 09:41:00',
    size: 17.910_848_230_950_734,
  },
  {
    x: 1_675_129_320,
    y: 13.982_844_275_644_254,
    xx: '2023-01-31 09:42:00',
    size: 18.897_027_846_547_935,
  },
  {
    x: 1_675_129_380,
    y: 14.610_334_683_721_831,
    xx: '2023-01-31 09:43:00',
    size: 12.744_197_303_414_93,
  },
  {
    x: 1_675_129_440,
    y: 17.859_415_436_980_7,
    xx: '2023-01-31 09:44:00',
    size: 11.454_487_436_379_386,
  },
  {
    x: 1_675_129_500,
    y: 16.213_358_548_274_11,
    xx: '2023-01-31 09:45:00',
    size: 16.908_533_300_476_14,
  },
  {
    x: 1_675_129_560,
    y: 19.472_194_694_847_34,
    xx: '2023-01-31 09:46:00',
    size: 11.672_440_846_542_884,
  },
  {
    x: 1_675_129_620,
    y: 18.099_983_392_019_276,
    xx: '2023-01-31 09:47:00',
    size: 13.594_280_382_652_249,
  },
  {
    x: 1_675_129_680,
    y: 17.025_408_926_554_192,
    xx: '2023-01-31 09:48:00',
    size: 11.667_118_960_454_378,
  },
  {
    x: 1_675_129_740,
    y: 15.957_334_023_596_223,
    xx: '2023-01-31 09:49:00',
    size: 16.060_444_422_241_964,
  },
  {
    x: 1_675_129_800,
    y: 12.334_808_155_847_22,
    xx: '2023-01-31 09:50:00',
    size: 11.420_442_397_366_315,
  },
  {
    x: 1_675_129_860,
    y: 15.242_019_062_870_344,
    xx: '2023-01-31 09:51:00',
    size: 14.608_260_008_479_132,
  },
  {
    x: 1_675_129_920,
    y: 17.659_937_470_850_792,
    xx: '2023-01-31 09:52:00',
    size: 17.712_323_970_733_76,
  },
  {
    x: 1_675_129_980,
    y: 14.151_580_950_240_23,
    xx: '2023-01-31 09:53:00',
    size: 19.653_232_289_818_806,
  },
  {
    x: 1_675_130_040,
    y: 18.798_524_262_839_674,
    xx: '2023-01-31 09:54:00',
    size: 17.158_156_117_295_704,
  },
  {
    x: 1_675_130_100,
    y: 15.095_953_134_001_057,
    xx: '2023-01-31 09:55:00',
    size: 16.229_594_444_284_7,
  },
  {
    x: 1_675_130_160,
    y: 12.256_607_161_823_146,
    xx: '2023-01-31 09:56:00',
    size: 12.481_371_823_835_412,
  },
  {
    x: 1_675_130_220,
    y: 19.166_117_184_182_397,
    xx: '2023-01-31 09:57:00',
    size: 15.276_984_763_423_05,
  },
  {
    x: 1_675_130_280,
    y: 16.884_032_955_507_37,
    xx: '2023-01-31 09:58:00',
    size: 18.001_872_409_482_08,
  },
  {
    x: 1_675_130_340,
    y: 14.920_633_263_643_639,
    xx: '2023-01-31 09:59:00',
    size: 15.514_024_905_430_677,
  },
  {
    x: 1_675_130_400,
    y: 11.073_218_866_092_848,
    xx: '2023-01-31 10:00:00',
    size: 19.695_619_120_400_092,
  },
];
const Template: Story = () => {
  setTimeout(() => {
    console.time('render');
    const chart = new Chart({
      container: '.chart1',
      data: [
        {
          name: 'line1',
          values: data,
        },
        // {
        //   name: 'line2',
        //   values: generateData('2023-01-31 09:00:00', 60, 60),
        // },
      ],
      options: {
        title: { text: 'chart' },
        // legend: {
        //   position: 'bottom-right',
        // }
        tooltip: {
          // showTitle: false
          titleFormatter: title =>
            `${dealWithTime(new Date(Number(title) * 1000))}`,
        },
      },
    });
    chart.line();
    // console.log(chart);
    // chart.data(data);
    // chart.shape('line');
    // chart.shape('bar', { name: 'line2' });
    chart.render();
  });
  return `
    <div class="chart1" style="width: 100%; height: 200px; "></div>
  `;
};

export const line = Template.bind({});

// 图表类型  line area bar
// 大数据量
// sliding 动态效果
