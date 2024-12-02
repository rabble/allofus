import type { Organization } from '../types';

export const healthcareOrganizations: Organization[] = [
  {
    id: "pnhp",
    name: "Physicians for a National Health Program (PNHP)",
    description: "A non-profit research and education organization of physicians advocating for single-payer national health insurance.",
    category: "Healthcare",
    website: "https://pnhp.org",
    focusAreas: ["healthcare", "economic", "racial", "direct-democracy"],
    engagementTypes: ["online", "advocacy", "education", "outreach", "messaging"],
    locations: ["National"],
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABnlBMVEX///8AoY////7///z8//8AoZH//P/r/vz8//zq+PlZuauv4NnH5OQAm4i/5+VMvanz///J8u4srKQxqpmu3tuE0s6FycXP6ukAnZICoo1OtaQ/qJcAmYP///lov7MApJNjxr8vtJ4ApI0Al4dfubA9uqf///Tk/fk9ua0AlYBywLgAnYRgwLDx+v/e8PTL0uZjxcEAk4ma29QAm37c9u1guLP59f0mUZzb5foASpnq8/stW6CXq9Hj+/zy//c9uLFVgrePodAAQ51SeLYdmpXO/PqczcNXqKCl4+F6y7yf09Kp6ttQrZ49qaK17+mQ1tJ4tq+L7OPz6/jU4vA1YZ9OeKK6zOKateMiWJBBZq+51O9md6yatttuj7qQqNO/0uIyaZuGodwQWZ2wteQcS4CuvdgwUaUALn6MoeB5iKjX5P55hbwAO52ewenAxepKdLBaaqcrSqQta69vgbDi1/rEzdm5utFikr9vl8ddiMzY3uCex+KoyfNOZpChqd0APYYAMJYvYrZ8p8gAMYcAS5AAXpZloMM1bpuDktRdhap48+BiAAAZV0lEQVR4nO1di3/aRrYeNKNB2BEVwYmRjeJEODg2lmlwAkIYF9tttu4juUUUB4JxQlbZXdKY1Lm3i7e5N5usu4//+p4RTwO2SYry672rL7GRZo5GfDrzOGfmjIyQCxcuXLhw4cKFCxcuXLhw4cKFCxcuXLhw4cKFCxcuXLhw4cKFCxcu3g/cBWAi4wpeKDO+IMiQyRAkBAkCORcYI0oIPV+IEAFRfJFMqzxuHCmKhMkwRByl5z4sAVN4mhRoXgAqAMdx7kixcmFhSBmzsDGwuSRlvedAkjSU9GbPF2LIEk66SKYtiC8WlCZWS9Fd9fPPF84Ez/NyUNKC6uf82UItQXEW7Yogf6FgxI8SkXMFIS8oTYzhXEjlPeeA9wSJd17m5fOEGEQ/uipeJGQLzqArFwnysoRdhi7DfyeG8hgMPRNiyDoYl6HL0GXoMnQZugxdhi5Dl6HL0GXoMnQZugxdhi5Dl6HL0GX4/5zhuVK/dYa85/QyCR+JyKr9bfguQ48qq+3cECQDYV4Ve1fIfJchiMm22EKIt7+sJ8T3rbl0GUJ2/109YljmQx64sQMM5dAXWa0P2ezsvd9FYjzf02EoFPRmfSzT6/1iXga+cii2Kvl8dlr2S7HHMJzwstJ82pK0KMLjU4NZu3QQ9Ys9huKK5PX27unL+i6t3FhX7ZtOvpaGfBT3geM4IgWmwrIsdxnyN5Ai2LkKN70u86rKx1awILTS/MtdhsDALkzAAlllDOV5YssICjfbz3CVKH33hJIQkqb52ELIiVoaWiKob4UZUUoJJYkIL/fpEGEmA1lJuthm2L1gOtbH8Etir5tTgq6JUEXFoJctf7Mlz0A/w2tslffUTUEiuyryH0GHcD+OrTHPRKDhdNrhDYkyIYTgYc+GeVkGhhyom12AZsK9Wgo6ZImEE1Bbh5p9IcWDDDmhv94AQUo5adFuHZNnODKPrER6Pc2N3h05tAsUQ7GVbsr0KYatIIMWQ9DpvNRatweG/GkdksEFfUhZgktk8SMxpFm29DbMkFBfUPU4wZAtbSfCsuejMUTXYqMYAmbCjuiQNVdfWIU24BhDMhsILJF2AIoAzzM0iiEh0hxj2E0awZCDb78qQofkmde48xhyyOcPBLydogUBHqsDPU3n1Hc7FvFMU8kOZiFoNjaSIfTrfjEkr5BOTMgIhligZOo2GAaxoIbOY4jRpeXby3NL3bKvQv/kHENpXgWzohvNsjRah6yfvxYTr53HEForubc4NbU4tSJdwNC/HlpY3+2Wn3CYoQwjrg+16+mSfIYOIYuPTUnnMRyK+TmbYYwPwelHYqjG+OUVFlZmf8MlcYhhK/QO8NV6UOpcNoohG9+QrWVyEcNlVYx83e11ErITI37nlH4T+vaB1C6cgJk1yJBjY7ctKQX5LBXOZjiEsxmGgovTQpshQfdiIQf7UkQkCXO9JjGiHZJAW8H3l2cR/vUMob1Kkm20MVAqTcEQ5SBDTgALuXNMPhGHxkOSnM+i1hdbnJ4MQ64bhwhEoWWoTtZSu/l0DslsbNhqk+jqChvECKaz9ybBEIrs3pESjuyGVSd7mi6YNyNNhfgRNs29ZT8VbD13Q0BHMmS9DPhhmBMuYNgBWDQKyDjjWwylQ2OUVsILoxgmluelgfDWkQx7MmQchtAQsYDW5uWFj8OQoLU5MBCHGRL0pRhLDETwjmZIZmemAX56rtXWuyMFF3hBdlqH3qUWZq6p4ql5mh7D6YhHXrqYIXzfqeVwWAwHJeF8hsRr39UbePBtzBNRnWW4GWRzTDwfEdvTYSNq6YzoiayCH98XIP5rfAuwS8Mhe9orEunMwTnI0Bu0Ay17U4cjGcr88v1TRtmvY+gP23Mznt59nbTawLU9Nfk7mqFHvuylEtct5dcw5Jhd6vB86WnL+/TdzmDoiVyBseu9GYoj2+HHZRgcCAfuMBRvdC+ZYUTkyBo6nyEdxdDTjRHu12H4t8jQE566oB3+Rhl6x2aohmf+TzIEHY7uaYYYemTZ200aYNhBh2HnfIBhB44zDKmqv4vLvOoZxVANBmYDkB+Ynb0SZukhNXw90L4Iknpz3rErs+3kwJz9JObvX2pJ+RP9Pc1UO/mS/0HE4zBDjxoJR9qwl5WGGYbUWDjGhMT15bDcypBjnYvC4GR1GYK/LrLE27dv2yXJYni5LSf2rz3xIGBfHBblwdXJiddSvgeP7BnFkJfBpbEtj9BC6/vw8GC6V4WAV5uh3JaTVbUlKHeKby0fdhlCvr2EFwrxjjOEL+vpLuN5RrbDkIeRt/N5fqGVEwp1LgI2PR0Cc4+9VNgugBGw1w5by4c9HTKjl108xG+iDMl8LCKGzwFULUkLxiKx84QYlv1od/mcfKi7ol17lxPoSqfatupuZBAgKJ2/LfI94J+2PZwzMZOYlqh/5nwhGz4UOL+kmXYpd+jshYXNCBOrpeOACHic3YAX7AztloC588TaUIRxpMYBFYSLt6NSfPGeVXrRQ6CUtPaH+pbO3z/KXEWJYGVsDhdhrNrwK6uMQNiPdFlkiIh9sBudOIhIANFJ7XS27y8IY+2v/jAIbFKLfSLp8lCnCT03jD8Lg11pJIAnyZBjE6TUQSBWPDeaoeyJhcXQgMcGDLmJ6nDTP+13FtM+ikcz5G8Hry3K6kDqpBne+Y+7d1dXp6YWF6dW77IP+Gyds8PFKTi62zpuAbJbqa0T+z8TWJ3qgAnfvXu3c8HU7/xEYQwHY6FCKv/Ah6SpwXRxwgyR5N0klGgslMR+fUK7dkmSIBD7U2KH0OtStsYgSZ13LNjHLQEmaZ93AfKtAw3SKQvhGMHwu4U1hKXrjjPksMLe5QAdjv0OCfuTIKwokCwocGSHoCD7mIGJEDvGx+4m4RKswKmd2Y0fgf6XDTJKFCtRtrA0imHEfzVJsLToOENi6HmKqJGEkY/mk0n4VGg+T6mu5xFOJoGRQk3TgOM8010ySRWMWDrwTuahH8mDIIuIIVCUrhss4sA0TTsBsig7H2QIFqoY8RMsfASG2GhkCjmd7G+A+aJ9Hy8WDIyNgoX3Hj4slXHxkRYle6VMJlORii/Z2oK1nwSFbVQRUQiJ5wxy8DiV+dmee9P2M5nUBsVruVQmtRPHJP/ybeFJEmywUwzBAxEjc9fFaag/gnRL9IjM/OedY5h6WnyUQztNRHCy9lQrPOGUJ4XkQfqF/ryKnmYMrvr7Sr1eeaVZzyQaRc03daive3+ogDxn1Qxf6o9m5U8aVginHW3FiyZXT+WKer2ZPkRmeq/4sMoiF/oYhjyx2Cdfe9E3CQ4Yajcf3L++LMu8Yww5oxZX6s/yz5vMZvzlKSr/oJvbZfwiZShYQ5UCPXxjQgNDSQQMuWi98PYJjKF7b08qcMFhzdDTcQ5BzbUZWhzmpMYxa4Vo71m+njJx5ShPTzFUw/MzZpKT5hNsUdl3axaRxLLai9OdNEPFqJWlaoE837EANQvT/ePjV5D8uGFBH2IVyP4x616gFlrPCCbNZrmmc6i6U39TQUyHwvNURUN2MJvWaFY2zPobMwpNMJrPFPVUXdrJAd1+huG5wNZDk0NTV1lLXrpxCbqkRETtKnHCDIliZAqFWhEdpx81Gi/TTxFayzzTsRA1tlKlOqqUpH/sRZnnQJGV0hSzppPGBsLVl6j8Zg8BQyRVUpkih2yGmUcvDw5/lMBaxwJ99c44OTp6pGPSr0Px26X8q/9ECr5+FbogbeWmD2qx9I0ccoghtMPaXtlA9HmTGprxiwVkmrnWfLSxX9BAh7knHBsiMGPIVdPVyk7JYAyBolUGhgRplTe6whg+rlCNHPywxiIcsVb62Xy2U5CwQrsjPpvNCMDDWLpDyc176E7iRnDW/hoPxO4s2KR1CAzjHDSiR02kKPSXCqQ1mwTT/zIVpKfNn0pSJa1DFmjFyhAjk/vzv5onZVR9qSmofHJc0P5ygDjtx58VxNphBSmcr/AE4aiCXqf/Yj6r/3cTRRHXY8jzS+iL3Xl/djfy2XX5xlcasdkkwrJDDFk7jDPn5rgJA36yALWUa+Yg4XnJINWCYWU08uph3dD0/SQw3HjLorg2jsjGS/ZypWK6QP5n24yW2zo82mO+8MEfKoamWW82sJky69sW6o2HoMPI5buhSOh6cFleWPRrVLJdVDIlO6VDxK09LjNj5tU+NB3tsQXk9l8RgeiN1LNUEVkvNSw1TzKFk33JKmiFvSjUV/PErOxARQQ9PTYg9236Z8Rig9nlRKBCuZAqpWovEGOIKinjlNXGx0ToNsX14Fc+uKPE2Z5HICI7NlrQZDzJzEuwS8A80ZOgA7BDolxUOCjqCOV16DWQWSyahMvrIItbwpBOW0eUxkEQQ8ffOmNxicl4MQ4GEU7qSS55YHCn+lIYGNRY+Eq2dX+7hWe/jfQmMifMUNjkOGZWCiyeHCssYl1BrF0y116BQwEcA2ZzwjGQVxTOdmqhWbLPKDNbmQUL1qfC5JSoIrTkkS3ISoIh8jRD3hObv9+KLQODEKy72cWwPcHokA619gu22O4CSfNq8At8Ap+0ubnp1TR2BN4HwE72Sj5bFn7YRZDP/hua5NOYIBPoXcAKZPJSy8fvMJT52Dc+1IpZgV/S7BU+3D9rOmmGd6Zu3rp16zP269Yt+H3z5k34uGknfnazDUjpHrOc1m/7ipuQcaOT2vph0p99dutmu8D5q9Ipm4bnY/7W5A+4H9mZOTnM804yRN5s1rcE/xjgkGHJWMr64BCybHi9LL31k/VCXksw6wURdqmXleFjkq3fLbRLg8tPjfiehcicvSAlIcm/uh5SnfYtmD0mKFGKWTsSFLb5A5oS8/kU8O4oS2HvybMbGmbzOsxGhVzoSVnzU8ABirL2ZLfHkWB3OeVbRK7YK8g0MLe84s/eGJzXn3g7hK+L6oLt7nHQ+dluX1TPg1PMOlVkHpjmQTxpGvBVjQOraCAOOlXoOwUQZr4gV9coxUTXzpxvI2x2sK8dhhP2Mqo/Nj8rES3ocZYh9JXA4plhm2kEgWMIpioSvq8yO/P5BkLVWiqd+V5/eIhJuZA5yhQqBJmFOnsARuEn6FSltxZoZO0kfvYzRKd6Gj78Feth0NXbWRhjNnsmtzMMocopaOuvG+1To7RdhIpLc1soSsztxxoykk9KhmGkDpH1pmIQw0pbyKyldIXjjJQFHl7xrznoNdbScXT2GyS5U/5heAUqNUWzC1mOCGseUZYXnNQhhxU9s5UxOgyPwXFlDEGTzVzJghFyo0HBHj00MuAQgmdopdfqR8cpM8oZGQtzZOd5pvheDD2hWIBNbfiCawLbETA354l4+lbZJt6XYlJtaLVKm2Gq+DpdREyHnH5i7jVAPXtHBBjGy6A35jJArdRPjHc/mvA4KmB9p4xmE2y/8RnKIfWbLCsomMUEWmOWBHYjIed0iOGLWujnAhhnHIeMzItoZTuOcluYbOxQM1WOKtWXSZQHhqXW1gmys6XX6nQ/rStvLUzgWRye6O+jQ7BAY3NL4BOC40TRzPoa3Pj+547pEDrS4t92dko/lBX2mlWojQqqvDnIVRWjkMk9+uEYKXslqKWpw3pNZ8MF9tUsPaUTtJWuN6BJbpd2drY37J7m7BU2bnCuTQwmvN7gGkelSx47FmRmnV9whiFRkkfNF9aL3I4UZX1p5ilwrqSPNlAl87piVX5fx1WbYVFq5OxlwneZzfoznSj078/gcfyz8dqymm8p0+HZi1RDDEPq+tzqgiEgIWFHu1CfGnFIhwh8PHAhUPxNXWEMoXvEmFh/+x/tl4oCJvPOE1QtQDtMWbieyplr5p/Sh9hkPjHBWz9YxnYZLtZSlpGumKZwlhaHGKp8KBzjffBIVoPEZngj4tBMFEeaW8xNIPtbzO0xdorsfsqWFW/oGGyAYkM7fI6IthMngtHMZFLHZhSZDRPUSaWt4mHOwNCfPs1pjbeprdE6pKMYqiwKZBb5dudn7ceypIpOecDE0Ah7w3QSPEMYpZKUvY0aPEV2DjrkDEINqJxJ2+8zTNN+4kkw8uyLtKT98moKA2U+bwh41LurwcMasW4hy6ron174NsvqDIe+jnicmk3sq1jcQCXjho5wT36U7FntEJ+x9hQOTkvsbdoYL82LjjHMXl1dvW6j89lB33nn8NNPP70+Cp92MDJ3ZZYOMmSRRGHxio/t3SCUeq8tq07NRHGb/v6YkPZn+2imHScyItykLdCXd05QyhIeZihGrs1CDbenmgNTkQXZMYZnJHKn6++vvctQLY15vrT3tbG58pnwqayJt8P22/PZh/1KAfiMsnkYjFonzCjAmIKb9OFxPMMj/o01yjZ0AZP7c6J6KmBw4vOlpJgHNkZR0qyNvarFJoj0OIwAuGhyxY0XLzYs7dBQKDaKHx6LNcQwuEYktu2EBObCodCC6uAsBsHGySE4UPE3hr6dy+WaGofw85dgF9NH+2gjl3l4vL92YiGKy7ZlMBmGInj5bJvMnVXxFi8PREROvB0atSIMSYcpTa/pbE5DwnomHQfnaWcL8sH8JmCywNBo1ozJ6JCFWgdYJUH+yNwdti2Wd5IhVsDYhhHcZlhna9wKquae5KCyAkMCDJPA8ClU0PjkGDJrRmD7/xIS2g0PBmBOfJ7GKD1uFBqlGjA8ahSaUlSvHZgnJkd7DEuFxtFR4W3+g2/CDcwIe/zAkE6rSUpWY6J8qhlO3mpL1qrlw3KFMfz5oKwLXKVg6o0t1McwUz0oFiu1/GR0qPJybIVQIszeWBPQSuhWJKY6yBB60VocBoV4TavXTOhlosmjZ6VCKmOwWqpgYEh9qUOQMCfF0MZ9GCoCC2B1L65IXwcjcijklNWGFV+tiAUcr1HW08Cg9/phuRgvZyz0qNXTaMDwNfS50NNc/OdFxmUoQz1FgYVLiExdJUjbXWfB8Q71pdRgU0+4mDb0k2qlYiVLVTYdsffQl9upWNK7BjCE0YJw8bT+wabNEENejOwu+YLTiMxdZW/aYDtWHWJIkNCEQUIx90l+H8bDar5psMVOo5m3cjuvkj9tKGhzKw5yZnOCIz6MEMvBKwsJ5J1/wLYAB0Q55JRvwSlEgLGJfXkWvIQEgtk5G67YzBoz5QQ2IQdGskLG+otHgxA4Osq38HgisQSnffs1+xaa6twKKWnvSu5fZeiyxxf/maCLAbaZNMo/9PDhBLrE2+8wIEHROYb++/5LjsLv14Z0aOsxJH73gPcjcILRLN+bMJ34+uHdW584jDk/GcVQDXki8wF7kQZ6mt7r/ya+bmGv27KQUPhhUaObm61YUcLWfFsrv5vduNFWDvzW2leMhVGxiTIfEtWExF4sxkKiWByKU7UUKxR4EsyW2ZhPiKi9G8DeEWC/wwxSaBTbrzyzHwkBx5ydsn0KY2J4tAjJ6voqC1YA9ZKEo6vcnFTd+bMlcVbuVYXFNyWtXKlRMdiyqL5RKO0foCh9kmsWmdOPzY0k85mLOnjEOFnRPpgh2Kbr97zI7sLvXIt5HPWAjVpzo1ZFO41KJqdhY+dh5bBSaBgKKmdyLw63Tp4Q7cdmNV0BHaO9bZ2Az7z/nO3HP6wZH87QE9m1hyeSvRIML/COMtQzdVSu5R9tcfX0ofL8scE8qkc7RE+9g6pIyt8bRqqIX2TAZtOO0hugQy33gxlFpLk9tpEzXEvV+SwzIL64+u2y06vc2PjFRIcp49UWOkibejrOBnmip3WrJIHljaOg5ZM42isYUWQ1XoNxivXSM7Ds9FraGvcmwwxj1ySwRx+EY8Pb8yZfS9/m/pzew7nSu4dN4fDIYHEHgnL09O9/VASsvy6+NrRMrnnyAkV9hZ/o0QbC5Uwlo+Nm83j/wxmKcxLSVpYT3w2/4HbiDPNvj6tlQnOpk9eEKx5BZcRRQo6s5hMFYevhP7bfSaVUpo4RV9wum81CEr8oGEcVI13fOBrXUB32nkR1CUy1VeQPfQQd1uJIidJH1WZOoGba4qJUwPU3ZiXlgzFC8pY2tNTrRkXBNPesUDhKF3FzH1UaWwVUrBlj7jEb1qEnvCvRK3PkPi/KoqfPopk8w6jxlnnA4NFrJxtEqKbqMNjpb5torXQM/qJWTeu+Wrz8po4P0gd6Xt/fITvvkNH4A4tTj+PeC87ej6EsRh5IiVtkWgx+Mic7OZsIPc1JkS0Qff9PXP5rUdGab46ruZOmhrB5lGq+K2XK2IAu5cmPxr+O2ehvbjPvmKtmNMXIWGS8LZMjdCjLy7vfBb2J4BfgO53asT7xEV+zDPYt43HoK9k67kG1+S6OwWhRJGt/v7KGFO3QxJqlW7q9G8g6ODQ4xYyDM1X8YB2yfc6hcOSWd5q/emV3ytGZKGDXaUxYaS9WMNewbZFx7QU1ZrFFaSsPtdYAOG5ojW30HQb2W7QpguEmX/bNRMIxtlXfQYZ01nn4RnpPzH9amhYHXxphM5yAW9rFndVPuvvonMHi3PRI7wkMm1B2ej00SDEyYYbU59N8DqM1izGkQl4Vv7w69AKeSTMkEsGOg4U7SpflIaiyHFY9g6lQSz/mdvwJgXDeoDhUTUVeHGiG7b3cY2yi/+1B2r02JhazY3XRvzEQ+h5aIRP7s9wfERRJ4w1xbM52jJc4uHDhwoULFy5cuHDhwoULFy5cuHDhwoULFy5cuHDhwoULFy5cuHDh4t8L/wvKqJbQ5ULPTgAAAABJRU5ErkJggg=="
  },
  {
    id: "healthcare-now",
    name: "Healthcare-NOW",
    description: "A grassroots coalition fighting for a national single-payer healthcare system through advocacy and education.",
    category: "Healthcare",
    website: "https://healthcare-now.org",
    focusAreas: ["healthcare", "economic", "direct-democracy", "racial"],
    engagementTypes: ["online", "outreach", "education", "fundraising"],
    locations: ["National"],
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABL1BMVEX///8SJC4AABP7/P3Jzs8KIigqOD4UJC4ADRv//v8AER8OJS3q7e6UnJ4RJSwAAADnbiWboaIAAA0AEhvpYwALICvrjl322MfnayAAAAuJkpXAxcZDT1Tc4eMAABGepqny9vUAHSWss7YAGyfoaAsAFiPyvqLodzbO09MAFx6BiYz+//nmaRgADBVCS1Fmb3UAABj89fLslmzpbCrqfEH0//+6u7t1fIJUW2MgLzcwOj6DiYk1RUltdnZHVlcADBMFISOMlpPZ4+AfLjpscHUvO0MlNDZicHCHiZEAIjDEzsvuq4j1zbjrwqHidyjpn3bolGHwkmzv1sv27NTrh03jn3Dun3r518ndaRHuXAD25c/qtY326M7vl3Lut6TviVvrtZPy5t7xaC3sgEvhdiJ4yV1HAAAOi0lEQVR4nO2cfV/ayBbHE2Lk0SRC0PBoQoIKiQ+AiHa16+7dtncvPrW1vdbe7cJ63/9ruOckIHkYFBTYtHd+f/STZjJDvpyTM+dMGBmGioqKioqKioqKioqKioqKioqKioqKioqKioqKimo+ig9kBhtI147tTxx6Jnf4d+oxgvjjzT6lCktBFdTHO5UInQpLnO+qw8pAG76W7UpliQmcqqS8n1EZqeA5W7LvuxIchKwlsRzxqVwWU493ygc7RXJJP+FJOeZIVL0NnVz6yHftqhgTCx7LVMTYULnR1QVxR9xw7ntHrE9GWGYDSsaeIFxJCIFO/LKfsKizbBblJzzOsse+izdibMRHWIaeOHA2W90bEe4LMYewLGTykxFGgjc7K0K4wV3UKy+hKrJs7lfvtasBwsNX0BNGWN7dPemMCCPPIJyNDaMkwiyrEnovpVk2ckgi9KuUZhNejGcRzsaGUxCuZFi2+pP33BjC3EwIF27DPU0QtKL33HdLGFUJvfXsydsk720hEcZnRbhoL02J2l6Rz217Ts6VcNFeehjT6h3Nuc8HTU+4H17CejWzuprRTz1zwxSEOxU82M6FwktZ1n8O9FpLFw5/5l95Tk5ByBf3QEdaKGzIsqed09NTT/7Y3mdzpe20kEm5jTgFocDXdF07E8JBKJxpmp6ruM9ul1mRSWWE9NJzCbVqtZrRpiCcq5fCzdRET/6yEcsuM8xbPrP6TELtKA/qhMRLo516vd7xeOnpmXYKD6Oue8qL6WNpOiSEga7mKz6zAvVXIutp+4Fm/FROKINNK0BUWhThHG1IyNoK5WQuZWecZffj+d0SsgHCfEaolkqlbYGtuUv0H8hLj7RoNF0uxwSWP1kU4UK9lIvyAkyRus4LQszV4cchLOWEsyPMuopnfMRVXnyvXsqyfsLKDlu2Y2hJFNzlBRCWv0cbstHtEmrU0qlFM/aBChFntMCEhLGKfa36fREm0zmQazVxl88O1i92s9ljDyG7Y187smT4vXQ3O2jLPRCmasla3slH96rsA3ncJrS17/ZVh9BdRxb2k4lBBeyHH084Nxu+EYd6ICzAfwaVxiocDmnizMrDte48oAT/r3sJ4czK8GDCNe95EcYZ9UEPL584+I/rUI0Pr+WC1w6v8RDiGftz4upoqKcI5+alIdEcvTQk+n8gpF5KECUMlaiXEkUJQyXqpURRwlCJeilRlDBUol5KFCUMlaiXEkUJQyXqpURRwlCJeilRlDBUol5KFCUMlRbgpeajm5Sm2MH0vO1ci7AhV9jIbxSCzZzntf2DSo7UQIc4kyqN9DSbo/kTcvla7udMpqwF7qkg5sSN4PWCaL/Qz73Jq37CX+wmu1mc9KEgeKnAV5dKj6peS05MqL7CV/SCIKR9vyaJM/kEq58GOsSXB+//s7HffXuH4KtlncEEgZ+cMGBC6B4ppx9RuSZMShhnTmr4FWo1rRzYTHeks9mTYBckzFZ16KW/9Y1pE1artVotk3kBofMdPSY+GJ3G2TAfYYVoLXNaPxIDe2J2oF8u8EAgYbZYf52G1rLPiZEwW3f0Ai99lsYQqj9DW+wUm1J+llIOGQLcSFjLw52Bd2ffBAiT2oRkI8KZAI4j3AA76f7tlANV0IaZFRJhBn9FU6+yQlklEE43acyZsKgJbLrEBPY6ozrwhApaAH9AaP+qXyh7Nw89j3CeXpqCmxxnQuaE50/OeP9u0hFhKpIUIrMgnAngGMJCmhUSq+RPVtPJWr0mpP3T5IhQ/w4INzKC/yZdnyzEDqu4jcl7xy5CdjaE8/TS05og+Pc5D7WaEHIpTaj9NJYQJpqI18Lhs+GRJgiJMZ/8m549ZgSe3x1HWCgHOoePsAiT9zL5g7l/ZCEG7cIFqrcBCRO/MPZud+23ACE7/Xw4Ry/l3mRZvUj4VCwTRLZaZzpVNu17TpGwmue2j6osK/oyPSTkV1dA+SeKAzfhTADHEB5nx8z3ceYwwsYqzEaC9e0mtQmjvBbBmbTjm0mBUOAzoIT4oupptoR7hE9lcCspC4ESnjXNV16Maov9wE9kkRAEjeUpCOfopeojhK/1KETZX3cE/u0YQj0IYRNCcVPOvdiGj2KTGscTklMa9YzN8mjlJO4m9RNqnRrL7hwGetnPYWkbtKS+kHBqkb0UC6HXxM/dzkX1dwwGTGHfG07s2WL1HQTS4HfzvNqCZJFa5lHpExLak8Hb4GkGiw4hgWXFP6uCr7ywZ4uVwj4YMRAvZzUfJhPq451WJ1unicPDBuUBcYg9TbD/mEllx5+a24R5JpONJgKV1cwIZ7QSFWdOocQLpNa2XmX5HZXBMjjK1ry9nJwGYq1vRzszu7x0doSrEPtiwYABOedOVEguHx8fL/N2ARkk3C4LfNq/tBM2G+IWF1aodQhLuYW0vdwjJJNJlo14trMP89JXkNp0fN3CR6hCBSxk1OA9rUBZpdVwLzukLlXPzD4kxI1CujoLwrmu6r/W2GB9xNhFh7aH++rz7zQ2u0siTAHhfsXbLXw2ZCrpKGRYvvtkTC6aHe7l3i5Dgu3u+lA9wbfA+9J2p7Ygrvr8XYSYmUI4/W2ptJ131RClMpvVOdsWKZj4POtND4SHUB+WvXcChPwZM91Lrnm/ezoUMcurRnJp94pwJYar3TYhVlie8uKBUI3yMPV7fNJe89arqMRL1rxn+mamLjrXChFX6IeycBBe4gzkZ7o7Zj4QMvUam/3d98HDzwMXCAshsyJW7WLBbcNlXR88nHFmZV/Xjt0djqt62SbcFnVd/JfbiCsRfajqS1b1Z/z+sNQ5FnOidjoaNFUsHu0Op/ml3WLxRHVdf1QsFh23fVcs7v7iHmoDrh0qPDZEqSX3iKQ/5PnkiWdrce/xPVxegOnC/5SivzYhihKGStRLiaKEoRL1UqIoYahEvZQoShgqUS8lihKGStRLiaKEoRL1UqIoYahEvZQoShgqUS8lihKGSiHxUq7RaLyg+2Oasw1NpttsXvecVy/na3B8R7joYk2ybi/Xzk3fWynzqtls9pxx16+b1+twaJptGPJ9d+Lvc+6Ea4YiyY59NmXl9ssH/yVc/0C2JEWSFPn+Y9uLuGbcKjfOYe+LJXedISVLMT61Jyecs5euKS3FOLdfp20aUstY97TGmfjdrSGBFAsapY/eG+/C16PY43KfrZZ1jYemicNsTgo4ZxvGkVCSrOshoSSv+64w4YKWZMmGBRca772E57LUQgcA1zwA1hu7tY/D/DtchJLVZ8YQcncAYclXHz50b+HKL97H9A5dHHpwjCnDMIbt7evQw+hP/FZ1vl7qECqSsYkPGIEw3m5acOff0Dhf4c5vP3uaG2jDczzqI6F8h7AwjNLipiBciA3fYyPJhuYWPoP2dm8Tw82W95X3lqQYPTxYt21ow15BXFqblG9RhJL1cQzhf8CEyrX9fHHXcCz3PcM0FeX2DzT1N5sQYOPcn4pkdbkpZosFeCnc5iZHJOQuIMBYX53jbwaayTNMT5aU+7ZpMp/seNTEEcHU8kU7ZF4qWehWJBv2rKHzQeREwm+e5nM0nQmee9PCUe7BhCZEH4OQN/ythFuSZTXIhFdIuG7HDRPCqmR89hjnDrs0TMCSpEtF2jKZdh+D7xQp3kK8FOKlcUH20j8V8Dknz8F7h2fS046TBH4B0GS9h1H6jPkBCA8mB1yIDa2v4FdrHNGG9zjP9weE0O6Nkia35TjxuqVY4NDYe9NSlGbYCM8x6PeJhJiqOPkAYzbQhgduLzXbTfhyugz3VVGsdQPmVaZ9BYe9qQjn76XWOcwDMOlvGq0A4ZbSGqQqkJp9gWhy6Q2SmxZG0PYnRTEahmRdtdv3Vss/yBOEC7DhN4iSUCNckAmVAaGTmfkIwXDKAcfcS61LuFa55xgFJ82wEXYbdkg8H2SZXkJpZEO7yPAQcn25pUiq+Rc+oDcQlUz8GpRpiu2FeOlnuDlJPv9AeA79hIqXkDENsHEfnlCry+AT2IcpZVgyTkq4ABs2uZ4hydf9CWzoJ2Qusc8HQ4HnuGcp8t0H46/bqxASwny2JZEJIRkbEDI2oW+YK5xLz4FtHXMe6/wcI2rovLTJmPcwmcGkQZgtWsP50CH0RRqcYqwuRFSILjBfWpswKxrr0/zkdiE2fM+Z3yyl1d0KxtIbIPziIvTHUgym1ueuoshtpoGPdBczm7ARYp7yEQPETdBLmwBw6+TRnD1b3PvuHvxbuW5ayj3Uvgct6RpSACk+8TIUs6C8dI2LmzeYgQcJsZwdrk7ZeWmgtsX1mTXFgujSvlakA5gy1pjpCBdiwzhGU+uSVD1BWrbu/LIdCa0/fMO0b+CbgeIEokv7qyW1thQof8Popba3SUFCzAKMi7i9TIgrFc6ahZsQ66uBnaFadNYmp9FivBSPMSMJEtp26zqbtZzM3G+fC3sOseOtXXxsyVOUv8yCKuA/4RDclETYwHWamzaHjndlr9P4CNtYF0PAZbD4AFSlZYRpd96A8B6P+zKJ0G6XG1ycaTcwK93yby9pf7RwpcdJ1LDWUqYpf5nFeKlDyBxIBML2Bbpp08TXMOCD1pU/iphtTOysT3hsr8b5VgEmIFyADQ+cx0wOEsbNBjhvy7q52Lw2cBFt3T+KyeEIg/cUMN1DKA0foeIQ3uGbicB7C1zqxlh5C+a5lD8FBuEQy1nK4TAzVYxpyl9mQbF0y3l9dE8gBKdsYrLWspfG/9sI7Fnj7GBqNNCPcUFqmMVOQThPG4LWZEMeVESbsiUHFyA485Ms45xnyWv9doAQQtQXw7Ccw4ZsWPKUO93mTnje63U3nZvqd7/2eiQL3PXWDg5urtbbnEm4/Uav1xu+LtwcHU6qJTERUEx8ilDMBDrtBP54ni20Cec6Jm7E5gb/mk/vrOSm3q1YWlkNakV9vNMSqVPwr8lShVjcDLfpUlFRUVFRUVFRUVFRUVFRUVFRUVFRUVFR/ZD6H3VzJDhHetJbAAAAAElFTkSuQmCC"
  },
  {
    id: "center-health-progress",
    name: "Center for Health Progress",
    description: "Works to ensure that everyone can access affordable and high-quality health care, focusing on systemic change.",
    category: "Healthcare",
    website: "https://centerforhealthprogress.org",
    focusAreas: ["healthcare", "economic", "racial", "immigration", "direct-democracy"],
    engagementTypes: ["in-person", "advocacy", "outreach", "education"],
    locations: ["Colorado"],
    logo: "https://centerforhealthprogress.org/wp-content/uploads/favicon.png"
  },
  {
    id: "debt-collective",
    name: "Debt Collective",
    description: "A union for debtors fighting for the cancellation of unjust debts, including medical debt.",
    category: "Economic Justice",
    website: "https://debtcollective.org",
    focusAreas: ["healthcare", "economic", "direct-democracy", "racial"],
    engagementTypes: ["online", "direct action", "education", "mutual aid"],
    locations: ["National"],
    logo: "https://d16zv78c963s69.cloudfront.net/user_avatar/community.debtcollective.org/system/90/82619_2.png"
  },
  {
    id: "community-catalyst",
    name: "Community Catalyst",
    description: "Advocates for a healthcare system that is accessible to all, working on policy initiatives and community engagement.",
    category: "Healthcare",
    website: "https://communitycatalyst.org",
    focusAreas: ["healthcare", "economic", "direct-democracy", "racial"],
    engagementTypes: ["advocacy", "education", "outreach", "messaging"],
    locations: ["National"],
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFvTYWagrPobQ/company-logo_200_200/company-logo_200_200/0/1675185456601/community_catalyst_logo?e=2147483647&v=beta&t=b9ywSRtOsEs_jLLkFTJg1T5DGiB4QNPcuZfh6yFmDjg"
  },
  {
    id: "national-nurses-united",
    name: "National Nurses United (NNU)",
    description: "The largest union of registered nurses in the U.S., advocating for direct-care nurses and patients, promoting Medicare for All.",
    category: "Healthcare",
    website: "https://nationalnursesunited.org",
    focusAreas: ["healthcare", "economic", "workplace", "direct-democracy", "reproductive"],
    engagementTypes: ["in-person", "advocacy", "education", "outreach"],
    locations: ["National"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQADPRD8Qz3FiAmbcgHz1miGGS6jmQVGkkjEg&s"
  },
  {
    id: "hcfa",
    name: "Health Care for All (HCFA)",
    description: "A consumer advocacy organization working to create a healthcare system that provides comprehensive, affordable, and equitable care.",
    category: "Healthcare",
    website: "https://hcfama.org",
    focusAreas: ["healthcare", "economic", "direct-democracy", "racial"],
    engagementTypes: ["advocacy", "outreach", "education", "messaging"],
    locations: ["Massachusetts"],
    logo: ""
  },
  {
    id: "right-to-health",
    name: "Right to Health Action",
    description: "A grassroots movement fighting for health equity and a just response to pandemics and health crises.",
    category: "Healthcare",
    website: "https://righttohealthaction.org",
    focusAreas: ["healthcare", "economic", "racial", "direct-democracy"],
    engagementTypes: ["online", "advocacy", "education", "outreach"],
    locations: ["National"],
    logo: ""
  },
  {
    id: "remote-area-medical",
    name: "Remote Area Medical (RAM)",
    description: "Provides free pop-up clinics delivering free dental, vision, and medical services to underserved communities.",
    category: "Healthcare",
    website: "https://ramusa.org",
    focusAreas: ["healthcare", "community", "economic"],
    engagementTypes: ["in-person", "direct service", "outreach", "volunteering"],
    locations: ["National"],
    logo: ""
  },
  {
    id: "caring-denver",
    name: "Caring for Denver Foundation",
    description: "Funds community-based mental health and substance misuse programs to address unmet needs.",
    category: "Healthcare",
    website: "https://caring4denver.org",
    focusAreas: ["healthcare", "community", "economic"],
    engagementTypes: ["fundraising", "outreach", "education"],
    locations: ["Denver, Colorado"],
    logo: ""
  }
];