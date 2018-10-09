/*
* @Author: Suoping
* @Date:   2018-08-17 18:28:35
* @Last Modified by:   Suoping
* @Last Modified time: 2018-08-21 19:37:30
*/

Page({
	data: {
		category: [
			{ type: 'discount', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAsVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3mHKcAAAAOnRSTlMABfrzCffqEeYV1e4Zzw7jK9/LxLtZRz4zJkMvHlRMNyKr3Nl/Xo2xcMijZjqddb+1Y1CZiXqnhGuTRiW1cwAABaNJREFUWMPNmNkWmjAURQ0J8ySTIKKgolicZ+3/f1gxAcKgxdX2offJuMLJJrm5OaGXBxj5l60pcZxg7JPrUUG97wL0/Vs61Momrwyc802dcbKg/7AvOy/S0Fc6musk000ESBMp8XkuyJBhfv5kGJaVOdUeu+gLnaG7n0PZ3kYabgbe9gB/VoOb7xwRfcGzmMs/GcneDF88wdbm6joZFyetJ6hDJ3JtiX31lpNb1lQ8W2IKgSwKqPtaBF3zI8m4LzxMez3+nnL5w1CW1JmRNxhOHfRBFw95bub4PZC9WN7k5uohsS1DYBmspC9c9BueTcHDzCx/1PMmMxa35G3sDRVFiXzHmmMl1t6Kn3k2lOfoa6A3WAi4Kc/io4jwkm5ue8i8tNUkAF/xvKZgeYZY9nwNtLwTilxTYF5IMzcA3TwD7dUpnWIhLl5oZT9taJOXE/B0d/DkfST8CJRGfKUn/7jIWH43Rp08PBnL0JnXUptRdWjNuXJ44jBniyccS1yVBwf7kmZ/3JRaX28sYKHlSmvpBE0eEgyeVSsVa51HEyL0XPFNHdTiIQHhS8icfiLimzxhxsNgHmNNeEhwMsmYmhByF0To8tA+8hiYpwxVerNq2mpJVm11Qg2eQ52HhmWyWN4fAtpfuacku9YD1OBRKc+olmOXPLNvFxGUdc9XOdJ7o4A6j9rgobG745dg9+lIQQD0ANBEf6GzeIrIC1Oek8oxZIQfE8JDoz8wWKzEHbaTUBGD/mJnGmTYw1Os8ngFD2usJzkPjcArRlHthxN67iB+CrAoLHyFx3vPQ0+i3ZPsP5blBF3XBVlm8grpRuAdj/6gPLV9tTPgz3aw0qHPv+PRKU9DKVpO20ry3HERzYcOHhL8amnIDFPDgZLtDkGVR8h5TMrTVgrW8Zyr6uxvg5EGKE/SyUMCDY62KnAQhywLs/TSVyo8kwqP99vDDmlR/7g6p0mSTJfxyVV48J7n1OJpp4F/ut6fz+VldRxFoJI/o4lZ8pwoz2+oEM+LosjzGqFp86woz5fxiSf8Yx1llJjwX/OM/5xHrPKM/45HJzzCf8wDgJYliaIoWaIg9BXP1IS5zm7Mo3Idh4vXDjhMb8t4skFf8AxKHnUcFg9oYjiIl4e9KpnWdPtwIgWB3/P0pz8oT2GUQeZSJEOWIcsyLAshp9spLjafefqDH5Rng0r5SyozVRc9txyf//x+NR6n5FGWU6Hpx6HxAw/0kccoeBzKk8mzdR2aGt/z9LLTRmALEJljy9+G5SngLY9f4XHpuhdHBIS6oarSXOAYhtityTunyVd4rhkP9QNSrpOcfS8KouxEljiilN75dxc5q8FD/g/HAtHRn9ehCPBNxFbZ3Ngrv5uf60JEFDTeFq4lyus54r3TnPwpjcQOHjrCMoHEDFIPB5QwyzZif4LG/NysGg8Nxc79uCeCyga4nnNDdvrI07gZBRYemzOH1b+19T23iE6VZ1jycAUPFZIg9uN194s2DjGt9131outbs1xHWvioYaPmLPXjbRt92XXwUCHj5zuhcEyJunkIEUONfduP31clT7oveGLK055stT7Zjwud7JxnT3h+1nnayx8q1eWPt3T5u3lIQk5heTuhvtsUSEKGSvlhouA5tnjIWHnqwelyWG6RcFxsEew2tSrPscHT3rTCOe4Hr03rL/bk3gbts9jiGTR16KrOIVHKjP0mKyOj4zW3i8SP81G6l0sepa3zprAJuiTNjKKwyRK+bgWh3cFDvS8ptUSsdMHMbI9L7SoWcp77+gNPR/F/TLD/fcQ6JDzrjzyfjyM2O45yn8tH5wPs5iFK/fuWq0Ix0t5xeVBmiADzz06dzvcYv77DQfYVEHLGYbsZAlqnn+m1i6c0ESN3d0ls07T2t/PaiURU3TGX53qsfWu/ovXulliWfdguT5Uq+gtVCEFUII1rgwAAAABJRU5ErkJggg==', color: '#cc8dcb', title: '折扣券', extend: '达到指定消费金额时可享受折扣' },
			{ type: 'gift', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABICAMAAAB8+nPGAAAApVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+4/eNVAAAANnRSTlMA8w/CpYAW+PXeWuImkE/7PKpVKwMaje252Mdj6eWVCwfbcp/Sy7SGRDSveS8iHmlha82YXG33WO/kAAADEElEQVRYw+2V15KbMBSGwRTRjEwXmGI6GFx34/d/tCCJXZPM4gRPJrMX/u/0W+eTTsFifpdtt9s1d/VY4BWoU8SEuLu+ias0lICaorXprJg/KXGaLg8KjPE590d/3NmMvXKa9xzJngQimctPLTYfaZcofDAgwO12g0DyVM6wRHt1qsuQlSAcTCixke9ujg8xq0PGqbe7JDlorJVT89HEBKzx3j+8T1MjD0wioBTyrm5eo19MqJbZQZzl2PZ7ldKdYBCE+OgSXbKQmIM1JAYJPW41e45y6F1Pwql4Pv8W82mEQ9iwKEipWM6I1yggOcPAvezmMG2Tk2O9lBOyk8AVkBZIuhFcXp+2sVEA7KZVncy16SxwpIK53hyOzmFzilgcQpMz6s3BcTQrq1IC3Ysz10myt5KkVDsivlzS+CH87FmtiGSXTjZByDnJDKbe+8MOmdvuyEG2FSP2gxKZR3q6pRjECXrH/hrjInn43a+U0Th0uTf22JObxKbmWMCyPc5g6ore5vwxjE0XjhNX7vsxSNPH2wzj/SgpNdh+YNpTNObE5dZoWuYnZq7EcYmboLqtRWZ9dzRlOr4sLxwoWTTJJsCiYzLT8PcOkaDqoie0yJuC1thzzw4xjprgh5gbGatpTtZd/TmjmLQyhG57Nk29S1lIbmO4Z1M5XzI35kI8jdGVbyehjDnRiWLI5IcltzfyveoRjBRUBl8hXwXjhhTlyiSSMSaqUHr/M4hkv7j6nkSxql8Uvhxi6Pi9XPeTSOb2T/TCPMaQRgTcEwp8FU4wIL5oqyekXWIwwUju1mGekLN1pRfmf2LAW9aLT6jP3qYNh36w55/QPvDhFBOlJfeEyjS6YzAHgqcE4bf8wtlBANCFxC6QRGMAwAtmqLcRkNcIsohfIESeHrYIjGHBrNfrGAUUY6wXyKCYAMXDgtE0rc1iFacUKdoCKRFOS42zdliQd1kRZAxWN8wCbVScgiwoq2HxwrwwL8wL88J8M4wuLpA+gwFhpy9QF4KvMV4uLFDufYnBIGmBBsgMZplemL/D/ATEqHiPPaBWlQAAAABJRU5ErkJggg==', color: '#8dbecc', title: '礼品券', extend: '免费兑换礼品' },
			{ type: 'cash', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABICAMAAAB8+nPGAAAAtFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////oK74hAAAAO3RSTlMA+PPvCOEXFA/rBAvoxNi31OWjsCLPHhusyzzBLX2D3LxAiVo4p0YpyJuOlGZXU04mnnhfc5huYzNqS4RRd5cAAAYPSURBVFjDxVjXduIwELXkhnvv3TRjiukl/P9/rSzbmECyhN09Z+9LEiJdNJqZO5ohnsCb4eoU57obFAnNkQBcrwCQHJ0Ugavn8W4VmjzxWwgCy9imP7ns5zNXKSxaIzsaUqOtQnFn5f4y8U2HYQXhGxJqMFmWm0KlNY4jSQgBwvUGgMggJEmO02i12JTLyYD6wpQBuw4XWzcVyetLkGLqbhehyQ4ezBvYx7hQRQ6C648AISeqRXy0B/d3Mpj6ua7BTysBAqyBDKwBanyi0vTcnw6E26VMdpLMPZBotCcpxnis64eDro/HhiJ5tAY+n4mTg92Eag1yThHdkWDnihqdSIE7PszzPI632zjO8/lh7AZSQmsiDoIWJB3tHAFbtIsS7vY59NIyGlbh2nEYhmFrDAb4B/rTsddhNYzK1Ou/lUu2Q8RDMdtD65w6yGR3c9z5oUB9FxRnf3fcuHIdmO2B5luGIvyV3LJwyTzyQ4cZCFRP8kxECQPGCf1onnAtj7zyieVFbKwh1WC7axz4GgN7tw9UsrFNvKwIQwHYoFT31304vQQvsFN/k+K9UDEIyQP4pjaxLRBvYWDGGw5v9iQCHwxYSsjyxJvg2VBRax6SI0DD5zo88T4cwwI4NdrTyKlJvc9CmamMT0MSIlfT0NLIpvg3bRLskUTXNKJGKAG2igz0kcm/xbL2xwHEm1OD2Iyx84EsDTOHpagfmkOxTjaU5Mbh4xmKYho0KanJejk5C/xPzDlP8o0sgmYnjaJ4nRVd+sPAXaymNsPidPg2FVjGnK4W4xRZ0bAU/hqp53Lb8QAoarJ1yBfDUch+kRYCG46Gi3JmyZoIuz3aflUHP+UPPRqAPvMVN94uP86haWOxaOE4tjk9fyyj3E25fjWgvaVP4YOy6LIScKezSLhEmlZVKVAMw9V11zCUQFJVmhaRaMHWms4xXYXgw0kgg2fZJhGVZXmS5FkWoiD77T1NOgk7n1DZzhL7/32qTT2uX0G0hll7GIFZ7mWut/b6Ev0aTt4vmUaLaxLQH7OvET0e64Hcr6+JsBbvy5sWk7ScKpaK5R+XJ3ADLli4aKhWmso0edPico+0eFR1WkzS8yg7147NJotjnM90BfnHsxC82mf6LI+Pi4lfB8I5i2d0t0+tRkS1ENujqNJ2Z7L4aTKdVKdLFM8P2NnY6Yd5HC1O1WRq155hzVMkqe2BxEVFuAq812LsPZ5HMY/LE3MDLlgoS7oV6Ong6/9CiwU71m9azJH1L+rfaTFJwEbSjT/RYt42MA34ay1O/l6LqS+0OH1bi82R/oUWB/9Bi0cfpS5rd1o8zbw7LT6t1j/QYhtpsRs8aPHwkxarxWstLtRPWrzEWpwhLYb9a057qcVK/3YG8LMWy/9Ai6eZov6ZFqtKNuX7CHAL8CdaDAp3ZPPd63JUKRa4/gGAp1SjxijqXEkJBHc380qL724HwESqzlTdulRHGnYfcpqK8EKLVVXWbk0KpC8VcriJ06sNP+M4nJrmKy02zenwaEh4V5vWxLlKmqQCYqKXlS/wr7WYF/yq1JP2YQLljzMx10nMkqAIsFmB+pkWUwJrT3Zt5Sf1A2FgSQcwGPvr94RimnWPNiTpmtimlym8/YQ0UVpfG9kiSWxSuhaItyFMg05EAWglnfgHz2vrbwtMgfkAN4veL3fR7FbujK6AzkZrVninEVqPNtjL2FPLC9dmihXsd85P2zIHtWXWXVuW/ZsmkWKizV3Lqo5nl+Ho+5ZVQGp8mX1qWWcRg1YPTlHC9YlfKHm0/AjXttP0zwMMFqFpoGs1Tj0I+gY62gmNnYv4sZ1P5AK18/Myj6Nou42iOC/nqJ0vHtt5SMen7j6Fj9PjcAEAsRku6JvZ4TDb6M1wQXwaLki7iXA/6ijH4tOoAw86MCDCoxxDcVx2o45+8JJ78k8HL1gnRdnL8eDlaQx02rspMu4loJi6+1P43Le3ZW9Vbrx2KAUQnopNN5TyZvkqY6nvQguPyLKP43a+UVJLfRiReYqxmW8vH5lpM0gnX73EwuEin7uKZ9UDO1jTwHpg50nuuIxPy9B8ZvgFN9WlZxxaFJoAAAAASUVORK5CYII=', color: '#ccb38d', title: '代金券', extend: '支付时直接抵消相应金额' },
			{ type: 'free', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABICAMAAAB8+nPGAAAArlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8tivQqAAAAOXRSTlMADPoH7PbmEwPz8BfW4S9hJhB4rHNZyKOGwrloUEwfG46LbqiCnZQqItx/a81GPqBVNLw60a+ZtLJoPto5AAAD9UlEQVRYw6yW2ZaiMBCGTQgJW9g3QcCFRXFv7Z72/V9sLEDt4xkc+2jdWSZfaslfYfAfk1gVBBWTBq+ZYG4cZ2MKL1LSIiIkKtKXOFK2jzSMtWifvZIWywOCTydMgpz9IgUBIUG6xWKZ2w/xdDbxY2taP/6AdUIvZa6PEvMWPopDChTg0DBGt1TNZKTPhT6Mflgu14c0UxmchtIwkE+dyUGYgg8xNUsP6+XyoPdh0GiqEcpXw69x7Om65y6U09WUhQu+ePw1XHFKtOkI9WE8m5w3EB45oT0a2eOGggnBDWcMvtCJeLPI9noxcUhgHxZlQiglSluVuuZywwEfkUWMARPGfRhrOVFOd4b5yjBWHN/7lcnS6sPYX/cYTG1PVT2b4nvMl92HYXUht0mJl9VE8zaCsPE0cvGIbVJyUbM+zGQmQwDc9xWxC32qnvsqqNMuXVHxfQ6hybNJL2bsAIZrzuyoQTnJAtraXoUFgbJrx5mjccA44z6MWnyIzcWv1NRc7+y8djPUNTFz69zerc1UrbbtqkLtw2yHsOBPyc6qqfaeYeyuTUU7w/D21VlxrPwDq4bbXsznSoSsQ9bJFAHlwkGdHFkIFRRXn//CSAipeqRB1jAUHg8PqKAW6SpC0p0qrcQIIgVDd0rXeoSx7BK6hpUoMBJLuCEEi831uB5qnXamjzFupzVtWMf6nFnt5JHmujvxNUq6S0dyAz3CICMn3UUkVPMnrj4/p8ayzaic0asKZH7Rbv8c4PJVE3RWjjYZG5TFgioyvkCoUx5M4fGTcygdegFhWaGLohwUs6unCXJsV6r08LVQK3vcFOF69qwYGC5k2pYsn+oms4SHFBjoFjP1aQ4taYy4xiAxuNhWbOgYCROefENYYjjDbiM3kgFKg/YnjROGpKcfQsSSmLbHBymC8eDIDWaZoMEvDCXLBiM7k0Y81XoB4eDVZyr85nX/XGEIZrGuhKbye59imDO+zp5Piuk+h13U36tS65k21xv3TPveVwS30rmcjXYuBZe8zdVnO6Xm22ZuU3eHrlU3Iw045LiZS0+lNN8cCVC0yLx1V8q+jxi8fG0Kz32DrXmz4fidAeWNmNeTeleJ39TwN12/d4nhTdJ806B419j6OUTrv82YQQqAIBBFN0G0iIJE3ZobIxdF3f9srYRgsi/OQM0h5r/31tonSl66UyN66aNy5KXTgdnD+8CEh4ERmjuZ8a1BgZmgQBWYKAImfEziQ5soQvKBFuG19zGH19FP55LwGsJ+k4P9Jgv7WD0OoB6FIrQpJEJYy/QwaKRlWBK7HkgiW1klBZqv88JxAacOk1KHyacOfK1N4cW232egW5T6QyIrDXYX2U4I1EUi8PEAAAAASUVORK5CYII=', color: '#97d4bb', title: '免费试吃试用券', extend: '免费享受服务或商品' },
			{ type: 'brand', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABICAMAAAB1EdO8AAAAsVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3mHKcAAAAOnRSTlMA+wjz6RJhQqT317gE44QZ7xUO7Ax3W4bO2yctHN/FqZoiZDW9sEcwi1A7HtK0lVWhgHxuaUs+kMfBRg1a7wAAA7NJREFUWMPt19mSojAUBmCzAAaChk0B2VHAfdce3//BRsJMg0wNZdM3czG/F1RZdT6DCeRk8J1ocXIKNr3LoamN85tV2HJfQJD2u1D2DUZAn3IoaPFMtLYBAo9nvi7Q2ep0/9hgA5EHz9eqqS6M4+skWqjs8ZkvCWM3eQ5fxQwB0IMwdc1LpdFuo1bVXyagdhWjhaMyRtrC480ZcPPLaW7X5QAgRsi7BEyzUWQ7uCz5FLB/iJSAtAlKTV1oR/PcfTJUjEY5Qli156NjqLQJGufi5XScvqS4z20VI1T/AYQpw8veXQtxMURNgkJtLS2PRXQYviRc+LhRThh27Gh6XZl0IIxeCDqTDoqvGoyhdkBDsOfHc+pqAoSDQYuAWib+kMHj7wGAMdVZHJLl2OQlLQJmoq0S0iWocjTKVp6mV0CbgJp4xB0AIFgNlFPiepTX/knQ/LrBoEMw5Msy9gSd1kKLgFmicoEQA6svIaAksH3NYbO4TVBvYRP+a3Jgias0n31GCnxQfq/EcNBF6G7AB0HYPNxLnibon3HnTkWMB53EMqkEe5uuTVjeL/31GXiK/BaRWEZ5RUrktYc7fpM4hIhP/DLlQh9iwZ834qzWtC/h+OApyFuPC70IjEvCDseD3gR/NtBip/UnAODEXfvuKLbfGQUqr0SJvkHIfBE7c68/YW9IubI+XNibiH6tzskK9iWmO75JG9ZeoD2JTMT8beH8uLm0H5EufVISTJ5InqCbjbjz9wi4HgbcIKq8myaTRi4b9S1ioBUhA9VWtx0eT1adqYOrCXd1SLsIGkv2rzc4QsxohFU7GVILK3VpBzEQ3O0GdewCxAjv+yweCyatnfZuli4//A4DIIb9+eI8ibW/EdRLwwAz0rmpOnZhSflYM+EfBDfgOj/tZLXTIMzw5XC3zwTYJnigVnazvooxYxwCjGGeZoMIULC1kjzm7UGTqKIL43V6W05GEV/wLBqJz6UhXnahytEqBBlY/rifbjmsiZfWdJ3fztOKmJ6l1ep2y6wi2KgYNXZ+hBfR5BrP7mFN1AaFQpbwZwYnmQCf4S375Lz4gcDLDKnBD3tD2gQPlMSKECX4G9Zvy/uBHxxIzai+44O3CB4ItfFsZRUfcmMozzzeJngEb38JFf9lhr5IDKipl41lcXAw6EPU7e35WDezPYinAXVh7e4vQ4WRHkTNpNe6se8muo8XaXlLpCfBY2pX8cAPOb2I+qi1ykZFb4KHem5y7kvUx069N1HnP/Gf+HeJnztpI4Kvq37KAAAAAElFTkSuQmCC', color: '#cc8d91', title: '品牌活动', extend: '品牌大促, 推广' },
			{ type: 'single', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAArlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8tivQqAAAAOXRSTlMA+Bj687PTAwYUCu0c3Only6vXuSmoEa9Bx8DPTuBFMr1zXy8jDI44SZ7Ek2dUbGOjgZlvd5BZeocpSEzIAAAD00lEQVRYw61Y2WKqMBBNICyBkICCAq4o7lrXbv//Y7cM2NiL1tpmnmyanMwcJrOhG2KxcHRcRElHuPhDXNFJosNxFDILPSDOhLJZP9tHhm/yEoibvhHtj/GM0YnzQxhr0n/ZGZ5wXUIwfq8EY0JcLjxj9xI7P1HLdli4PaUmINQFm+lplGuOfRdn0A3Sgpf3G1LwlQbzwfdIVottnnxP/zym6/KXXPSSdZe1rG/U0bKVx7E8jD3PJcUv4nre5Tr3pkfNvqWOzcarNjmbQDjvNYZDDgsf5gy9HufkbDIJpmNmW1dxaLiAY3AnSdvZaBCyQVoYijvGmIWDUWYsP5F4c5FfM89ywv6woVfaiMbueRNTB2nNYg37gYYmNN6sIu+sFTabcW5bdZrDIDlvSdrdGaNO4S4SqLjLoWw+anaqbW4ShTWd7DBOejpY5YroeXB+ChLoc9/BEG65s7eMw/8Yd9iiSeC/WLytcwoq14HAYWn+9MZxyWTzwL4gWdqgaeISp7PuwmOqAclbu08doVc8jemlca3XQ3kH8bZ96qDvgZBD52uPABJfZa0LgtjKKNe9tC+tvgmE7PF8Wfo/aT9L4+zZpsLvbfstG90HQnZrvhaVDZuZLW3mwJ3wpT63gKROFU/86cypxQIfwN23NbXRz4CQTddvLpjhB5WvTMK0p4NhgH0XSNohMHhTGk5gob8VgLOMcgfdB5JIeZQAktj2nUKhl1e35H9KUR3IMAnGJInqQIhWscJ9fZkUW3flixbda1GPHgzfNP2ofgl8bQEsDRe0oNoAnyaN+Fqqae0PbcNoT0+tKwEjj8FtcKf9cTSfebj4I90x+2qUotqH0KuB1WalNdibMTSei8pDKXpQJEsiDtE2A6r5ses8DuRsMg6nsxHK9iXQKP4NUDwCIHd/RIuAQIYZUOtxIIsOwJdJtECBAcQ3wscVglcBn4oYEfI7uFBoyNCvhA3LLJMgs6ED0FiTAp/7Vi6mXzaOIV3pDRPxki3RNKRIB6xJ6zRtX+5sCregmAt0TskNU4p8EjWh08i/3Nkoz7suOtcdWIp8pHXRooRgKfI0klWGFBk26kBlEJSiHEiZacrIVvb5lTmksiei7NEqCyPKApuyUKss+CtLR5AgdQUJUlXKVlZEqCtrwDuXVaG1nv+l0EIWa1el337729JPVTGqrDxWVbArbiHqTc38V01Nvc3aP9hmqWr8FLSiBFpRVc2xqnZdwQDhuT5AkIxrp5+PNDLNvjdk6f1lyCKjXjdY/nXsIwdRr/cHUYpGY38e1vVvDuseGR8uvhsf/gPxmSw+CSK4LwAAAABJRU5ErkJggg==', color: '#8c97cc', title: '单品优惠', extend: '引爆潮流' },
			{ type: 'normal', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAA8CAMAAADygAyiAAAAolBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8ELnaCAAAANXRSTlMA6Qc8W/Hg+vUK+G8gGe3mgCUQDdKan9ZRTUEsFdq4hGS0raOWdmVWN8yoycG6kYyIe3pFQ6uUZNgAAAJASURBVFjD7ZjZkqMwDEVtg82O2QlbQoB0lt4X/v/XJnaGZHqqugoTPfZ9Sl5OSRdJSCApEmqvfc5Me1SQbbK8f9VCgq6K63KVdg1XBfGmS1dlHU+cqA1yTk3DGBVlGCbledBGfzlukNFxsWgWuJIUP2yY4Cwnsc3DOTviTfFQihVF6RSTR1BV5vKvifsXp9UV1DovPTYlKS8rpO259I0lG6f41BT0WTibI5NPiO81NMjETKaXXmRZREGWFXmlzkRMtB/QaXv+ZeCkDAlSFgnLBBvnOLYdakRw9PTmCY46yXs7UWEMQxiL0IZdhBYp2g3CGoyRrGd/t4+XgeL9zpc1jkYh7KysZSBr5WCJmEDFUlABDQJOzQ9aN1pSR5HbBv4/IIM3aRDWqpw6DNKGGxNIyPbX2VdlEaVwrOorW/v2eAVJmX7yrIVEpT2058QXnTaBJvm5rlkKNmt6Lu2ZQDfZyTaMZ5d0uE3s8SbEzuKcmsJyfDx4c0He4YgNYQnlXDCQ67rhocjWF5KYvjMkJ/2Fs84KLTxDLvQqSLGIk6bv0cyuf0+pcAOnQXXLgpC66h5t6ZI3MzPpkP3YVTUh32prEMkZ7Gku6IkZIrG0/j9n/cMXoTbuPJDbCCv8Dz3+ofnYPBBx2dTs94HQDXRfauRbamBmgz5+sIIEaxGwpgUYI2CDDW7Ugg1/sNcR7AvydxuZkRrU6ge2jMKtxx3Iwr7u0NDDnBB3HjXJ9agBO7PADj+oUxTqOIY61yE/IIB90vgDHKoFFwOWM3kAAAAASUVORK5CYII=', color: '#d4d397', title: '通用券', extend: '以上券均无法满足时创建此券' },
		],
	},
	createHandler(e){
		getApp().push('/pages/marketing/coupon/create/index?type='+e.currentTarget.dataset.type);
	},
})