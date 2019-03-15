"use strict";

var Site = Site || {};
Site.ModelManager = function(){
    var self = this;

    this.loadSignal = new BK.Signal();
    this.loaded = false;
    this.models = {};

    this.models.background = new GK.Model(
        new Float32Array([1, -1, -0.018804499879479408, 0.039283301681280136, 0.03966140002012253, 0.9984409809112549, 0.9998999834060669, 0.00009998000314226374, 0.763966977596283, -0.763966977596283, -0.018893899396061897, 0.039283301681280136, 0.03966140002012253, 0.9984409809112549, 0.8819069862365723, 0.11809299886226654, 0.5102729797363281, -1, 0.00046364200534299016, 0.039283301681280136, 0.03966140002012253, 0.9984409809112549, 0.801364004611969, 0.00009998000314226374, 1, -1, -0.018804499879479408, 0.0011788499541580677, 0.0015574999852105975, 0.9999979734420776, 0.9998999834060669, 0.00009998000314226374, 1, -0.5159580111503601, -0.01955839991569519, 0.0011788499541580677, 0.0015574999852105975, 0.9999979734420776, 0.9998999834060669, 0.24207299947738647, 0.763966977596283, -0.763966977596283, -0.018893899396061897, 0.0011788499541580677, 0.0015574999852105975, 0.9999979734420776, 0.8819069862365723, 0.11809299886226654, -0.0004537109925877303, 0.0004537109925877303, -5.408649916827102e-11, -0.025564899668097496, -0.04469209909439087, 0.9986739754676819, 0.4997729957103729, 0.5002269744873047, 0.2806049883365631, 0.2391510009765625, 0.017876800149679184, -0.025564899668097496, -0.04469209909439087, 0.9986739754676819, 0.6307700276374817, 0.6311050057411194, 0.0035657400730997324, 0.48717200756073, 0.021884199231863022, -0.025564899668097496, -0.04469209909439087, 0.9986739754676819, 0.501783013343811, 0.7435370087623596, -1, -1, 1.1920899822825959e-7, 0.06866840273141861, -0.07191409915685654, 0.9950439929962158, 0.0001000400006887503, 0.00009998000314226374, -0.48376700282096863, -0.507066011428833, 6.044700029406158e-8, 0.06866840273141861, -0.07191409915685654, 0.9950439929962158, 0.2528209984302521, 0.2530499994754791, -1, -0.5314339995384216, 0.033864498138427734, 0.06866840273141861, -0.07191409915685654, 0.9950439929962158, 0.00010002600174630061, 0.2343360036611557, -0.0004537109925877303, 0.0004537109925877303, -5.408649916827102e-11, -0.011027299799025059, -0.06176140159368515, 0.9980300068855286, 0.4997729957103729, 0.5002269744873047, 0.5319920182228088, 0.0021256599575281143, 0.005986509844660759, -0.011027299799025059, -0.06176140159368515, 0.9980300068855286, 0.7659429907798767, 0.5010629892349243, 0.2806049883365631, 0.2391510009765625, 0.017876800149679184, -0.011027299799025059, -0.06176140159368515, 0.9980300068855286, 0.6307700276374817, 0.6311050057411194, -0.010863900184631348, -1, 1.1920899822825959e-7, -0.17915700376033783, 0.0018643300281837583, 0.9838190078735352, 0.49456900358200073, 0.00009998000314226374, -0.005819350015372038, -0.515201985836029, 6.141689823380148e-8, -0.17915700376033783, 0.0018643300281837583, 0.9838190078735352, 0.49709099531173706, 0.2424509972333908, -0.239996999502182, -0.7611619830131531, -0.042178500443696976, -0.17915700376033783, 0.0018643300281837583, 0.9838190078735352, 0.3774360120296478, 0.12266100198030472, -1, -0.004533649887889624, -0.07623569667339325, -0.23869800567626953, -0.19088000059127808, 0.952148973941803, 0.00010001000191550702, 0.497734010219574, -0.5015019774436951, -0.0020463198889046907, 0.04923360049724579, -0.23869800567626953, -0.19088000059127808, 0.952148973941803, 0.24929900467395782, 0.49897700548171997, -0.7353860139846802, 0.2528130114078522, 0.041692301630973816, -0.23869800567626953, -0.19088000059127808, 0.952148973941803, 0.13237999379634857, 0.6139479875564575, 0.00780081981793046, 1, -1.1920899822825959e-7, -0.12946000695228577, 0.14225000143051147, 0.981328010559082, 0.5038999915122986, 0.9998999834060669, -0.4572199881076813, 1, -0.06134700030088425, -0.12946000695228577, 0.14225000143051147, 0.981328010559082, 0.27143600583076477, 0.9998999834060669, -0.46525898575782776, 0.39380401372909546, 0.025464599952101707, -0.12946000695228577, 0.14225000143051147, 0.981328010559082, 0.2674170136451721, 0.7325829863548279, 0.00780081981793046, 1, -1.1920899822825959e-7, 0.07504349946975708, 0.23418299853801727, 0.9692919850349426, 0.5038999915122986, 0.9998999834060669, 0.2689729928970337, 0.7334740161895752, 0.04417270049452782, 0.07504349946975708, 0.23418299853801727, 0.9692919850349426, 0.6344599723815918, 0.8666639924049377, 0.5453019738197327, 1, -0.041613899171352386, 0.07504349946975708, 0.23418299853801727, 0.9692919850349426, 0.772596001625061, 0.9998999834060669, 0.5204560160636902, 0.4913730025291443, 0.021623600274324417, 0.07418379932641983, -0.04626129940152168, 0.9961709976196289, 0.7492709755897522, 0.7494990229606628, 0.7514219880104065, 0.24063999950885773, -0.007220109924674034, 0.07418379932641983, -0.04626129940152168, 0.9961709976196289, 0.8800010085105896, 0.6202960014343262, 0.7580779790878296, 0.737500011920929, 0.015358000062406063, 0.07418379932641983, -0.04626129940152168, 0.9961709976196289, 0.8685569763183594, 0.8686760067939758, 0.50416499376297, -0.50416499376297, -0.014809999614953995, 0.01706390082836151, -0.041971899569034576, 0.99897301197052, 0.7520319819450378, 0.24796800315380096, 0.7471569776535034, -0.2553279995918274, -0.00850577000528574, 0.01706390082836151, -0.041971899569034576, 0.99897301197052, 0.8735039830207825, 0.3723610043525696, 0.5319920182228088, 0.0021256599575281143, 0.005986509844660759, 0.01706390082836151, -0.041971899569034576, 0.99897301197052, 0.7659429907798767, 0.5010629892349243, -0.010863900184631348, -1, 1.1920899822825959e-7, 0.008925040252506733, -0.00009274970216210932, 0.9999600052833557, 0.49456900358200073, 0.00009998000314226374, 0.25777098536491394, -0.7413769960403442, -0.0023735600989311934, 0.008925040252506733, -0.00009274970216210932, 0.9999600052833557, 0.6288599967956543, 0.12938599288463593, -0.005819350015372038, -0.515201985836029, 6.141689823380148e-8, 0.008925040252506733, -0.00009274970216210932, 0.9999600052833557, 0.49709099531173706, 0.2424509972333908, -0.48376700282096863, -0.507066011428833, 6.044700029406158e-8, 0.24871300160884857, 0.0783545970916748, 0.9654030203819275, 0.2528209984302521, 0.2530499994754791, -0.4982599914073944, -1, 0.04374169930815697, 0.24871300160884857, 0.0783545970916748, 0.9654030203819275, 0.25091999769210815, 0.00009998000314226374, -0.239996999502182, -0.7611619830131531, -0.042178500443696976, 0.24871300160884857, 0.0783545970916748, 0.9654030203819275, 0.3774360120296478, 0.12266100198030472, -1, -0.004533649887889624, -0.07623569667339325, -0.24231299757957458, -0.10256200283765793, 0.9647619724273682, 0.00010001000191550702, 0.497734010219574, -0.48376700282096863, -0.507066011428833, 6.044700029406158e-8, -0.24231299757957458, -0.10256200283765793, 0.9647619724273682, 0.2528209984302521, 0.2530499994754791, -0.5015019774436951, -0.0020463198889046907, 0.04923360049724579, -0.24231299757957458, -0.10256200283765793, 0.9647619724273682, 0.24929900467395782, 0.49897700548171997, -0.7353860139846802, 0.2528130114078522, 0.041692301630973816, 0.014043400064110756, 0.18641500174999237, 0.9823709726333618, 0.13237999379634857, 0.6139479875564575, -0.7218970060348511, 0.7166489958763123, -0.046518001705408096, 0.014043400064110756, 0.18641500174999237, 0.9823709726333618, 0.13242000341415405, 0.867579996585846, -1, 0.46531298756599426, 0.0051511600613594055, 0.014043400064110756, 0.18641500174999237, 0.9823709726333618, 0.00009999590110965073, 0.7326099872589111, -0.46525898575782776, 0.39380401372909546, 0.025464599952101707, -0.0008622839814051986, 0.042642101645469666, 0.9990900158882141, 0.2674170136451721, 0.7325829863548279, 0.0035657400730997324, 0.48717200756073, 0.021884199231863022, -0.0008622839814051986, 0.042642101645469666, 0.9990900158882141, 0.501783013343811, 0.7435370087623596, 0.00780081981793046, 1, -1.1920899822825959e-7, -0.0008622839814051986, 0.042642101645469666, 0.9990900158882141, 0.5038999915122986, 0.9998999834060669, -0.48376700282096863, -0.507066011428833, 6.044700029406158e-8, -0.002533579943701625, -0.14884500205516815, 0.9888569712638855, 0.2528209984302521, 0.2530499994754791, -0.005819350015372038, -0.515201985836029, 6.141689823380148e-8, -0.002533579943701625, -0.14884500205516815, 0.9888569712638855, 0.49709099531173706, 0.2424509972333908, -0.2326209992170334, -0.27483800053596497, 0.0355990007519722, -0.002533579943701625, -0.14884500205516815, 0.9888569712638855, 0.3837130069732666, 0.3840610086917877, -0.5015019774436951, -0.0020463198889046907, 0.04923360049724579, -0.04967249929904938, -0.09863629937171936, 0.9938830137252808, 0.24929900467395782, 0.49897700548171997, -0.48376700282096863, -0.507066011428833, 6.044700029406158e-8, -0.04967249929904938, -0.09863629937171936, 0.9938830137252808, 0.2528209984302521, 0.2530499994754791, -0.2326209992170334, -0.27483800053596497, 0.0355990007519722, -0.04967249929904938, -0.09863629937171936, 0.9938830137252808, 0.3837130069732666, 0.3840610086917877, -1, -0.5314339995384216, 0.033864498138427734, 0.05447639897465706, 0.20423699915409088, 0.9774050116539001, 0.00010002600174630061, 0.2343360036611557, -0.48376700282096863, -0.507066011428833, 6.044700029406158e-8, 0.05447639897465706, 0.20423699915409088, 0.9774050116539001, 0.2528209984302521, 0.2530499994754791, -1, -0.004533649887889624, -0.07623569667339325, 0.05447639897465706, 0.20423699915409088, 0.9774050116539001, 0.00010001000191550702, 0.497734010219574, -0.4982599914073944, -1, 0.04374169930815697, -0.08649320155382156, 0.09058170020580292, 0.9921259880065918, 0.25091999769210815, 0.00009998000314226374, -0.48376700282096863, -0.507066011428833, 6.044700029406158e-8, -0.08649320155382156, 0.09058170020580292, 0.9921259880065918, 0.2528209984302521, 0.2530499994754791, -1, -1, 1.1920899822825959e-7, -0.08649320155382156, 0.09058170020580292, 0.9921259880065918, 0.0001000400006887503, 0.00009998000314226374, 0.5319920182228088, 0.0021256599575281143, 0.005986509844660759, -0.011247600428760052, 0.0015489199431613088, 0.9999359846115112, 0.7659429907798767, 0.5010629892349243, -0.0004537109925877303, 0.0004537109925877303, -5.408649916827102e-11, -0.011247600428760052, 0.0015489199431613088, 0.9999359846115112, 0.4997729957103729, 0.5002269744873047, 0.2520720064640045, -0.2799060046672821, 0.003274759976193309, -0.011247600428760052, 0.0015489199431613088, 0.9999359846115112, 0.6399250030517578, 0.3600749969482422, -0.2326209992170334, -0.27483800053596497, 0.0355990007519722, 0.15341100096702576, -0.0015961900353431702, 0.988161027431488, 0.3837130069732666, 0.3840610086917877, -0.005819350015372038, -0.515201985836029, 6.141689823380148e-8, 0.15341100096702576, -0.0015961900353431702, 0.988161027431488, 0.49709099531173706, 0.2424509972333908, -0.0004537109925877303, 0.0004537109925877303, -5.408649916827102e-11, 0.15341100096702576, -0.0015961900353431702, 0.988161027431488, 0.4997729957103729, 0.5002269744873047, 0.5204560160636902, 0.4913730025291443, 0.021623600274324417, 0.09212049841880798, -0.029639199376106262, 0.9953070282936096, 0.7492709755897522, 0.7494990229606628, 0.5319920182228088, 0.0021256599575281143, 0.005986509844660759, 0.09212049841880798, -0.029639199376106262, 0.9953070282936096, 0.7659429907798767, 0.5010629892349243, 0.7514219880104065, 0.24063999950885773, -0.007220109924674034, 0.09212049841880798, -0.029639199376106262, 0.9953070282936096, 0.8800010085105896, 0.6202960014343262, -0.005819350015372038, -0.515201985836029, 6.141689823380148e-8, 0.030007800087332726, -0.046785298734903336, 0.9984539747238159, 0.49709099531173706, 0.2424509972333908, 0.50416499376297, -0.50416499376297, -0.014809999614953995, 0.030007800087332726, -0.046785298734903336, 0.9984539747238159, 0.7520319819450378, 0.24796800315380096, 0.2520720064640045, -0.2799060046672821, 0.003274759976193309, 0.030007800087332726, -0.046785298734903336, 0.9984539747238159, 0.6399250030517578, 0.3600749969482422, -0.2326209992170334, -0.27483800053596497, 0.0355990007519722, 0.09745600074529648, 0.046369101852178574, 0.9941589832305908, 0.3837130069732666, 0.3840610086917877, -0.0004537109925877303, 0.0004537109925877303, -5.408649916827102e-11, 0.09745600074529648, 0.046369101852178574, 0.9941589832305908, 0.4997729957103729, 0.5002269744873047, -0.5015019774436951, -0.0020463198889046907, 0.04923360049724579, 0.09745600074529648, 0.046369101852178574, 0.9941589832305908, 0.24929900467395782, 0.49897700548171997, 0.0035657400730997324, 0.48717200756073, 0.021884199231863022, 0.01659959927201271, -0.045048099011182785, 0.9988470077514648, 0.501783013343811, 0.7435370087623596, -0.46525898575782776, 0.39380401372909546, 0.025464599952101707, 0.01659959927201271, -0.045048099011182785, 0.9988470077514648, 0.2674170136451721, 0.7325829863548279, -0.0004537109925877303, 0.0004537109925877303, -5.408649916827102e-11, 0.01659959927201271, -0.045048099011182785, 0.9988470077514648, 0.4997729957103729, 0.5002269744873047, 0.0035657400730997324, 0.48717200756073, 0.021884199231863022, -0.12346400320529938, 0.04332660138607025, 0.9914029836654663, 0.501783013343811, 0.7435370087623596, 0.2689729928970337, 0.7334740161895752, 0.04417270049452782, -0.12346400320529938, 0.04332660138607025, 0.9914029836654663, 0.6344599723815918, 0.8666639924049377, 0.00780081981793046, 1, -1.1920899822825959e-7, -0.12346400320529938, 0.04332660138607025, 0.9914029836654663, 0.5038999915122986, 0.9998999834060669, -0.46525898575782776, 0.39380401372909546, 0.025464599952101707, 0.09741339832544327, 0.05076320096850395, 0.9939489960670471, 0.2674170136451721, 0.7325829863548279, -0.5015019774436951, -0.0020463198889046907, 0.04923360049724579, 0.09741339832544327, 0.05076320096850395, 0.9939489960670471, 0.24929900467395782, 0.49897700548171997, -0.0004537109925877303, 0.0004537109925877303, -5.408649916827102e-11, 0.09741339832544327, 0.05076320096850395, 0.9939489960670471, 0.4997729957103729, 0.5002269744873047, 0.2689729928970337, 0.7334740161895752, 0.04417270049452782, 0.0012455900432541966, -0.09145530313253403, 0.9958080053329468, 0.6344599723815918, 0.8666639924049377, 0.0035657400730997324, 0.48717200756073, 0.021884199231863022, 0.0012455900432541966, -0.09145530313253403, 0.9958080053329468, 0.501783013343811, 0.7435370087623596, 0.5204560160636902, 0.4913730025291443, 0.021623600274324417, 0.0012455900432541966, -0.09145530313253403, 0.9958080053329468, 0.7492709755897522, 0.7494990229606628, 0.5319920182228088, 0.0021256599575281143, 0.005986509844660759, 0.052351098507642746, -0.012457099743187428, 0.9985510110855103, 0.7659429907798767, 0.5010629892349243, 0.7471569776535034, -0.2553279995918274, -0.00850577000528574, 0.052351098507642746, -0.012457099743187428, 0.9985510110855103, 0.8735039830207825, 0.3723610043525696, 0.9795349836349487, 0.0035952299367636442, -0.01745850034058094, 0.052351098507642746, -0.012457099743187428, 0.9985510110855103, 0.9998999834060669, 0.5017970204353333, 0.2520720064640045, -0.2799060046672821, 0.003274759976193309, 0.03350700065493584, -0.04285699874162674, 0.9985190033912659, 0.6399250030517578, 0.3600749969482422, 0.50416499376297, -0.50416499376297, -0.014809999614953995, 0.03350700065493584, -0.04285699874162674, 0.9985190033912659, 0.7520319819450378, 0.24796800315380096, 0.5319920182228088, 0.0021256599575281143, 0.005986509844660759, 0.03350700065493584, -0.04285699874162674, 0.9985190033912659, 0.7659429907798767, 0.5010629892349243, 0.763966977596283, -0.763966977596283, -0.018893899396061897, 0.009426319971680641, -0.006291859783232212, 0.9999359846115112, 0.8819069862365723, 0.11809299886226654, 1, -0.5159580111503601, -0.01955839991569519, 0.009426319971680641, -0.006291859783232212, 0.9999359846115112, 0.9998999834060669, 0.24207299947738647, 0.50416499376297, -0.50416499376297, -0.014809999614953995, 0.009426319971680641, -0.006291859783232212, 0.9999359846115112, 0.7520319819450378, 0.24796800315380096, 0.7471569776535034, -0.2553279995918274, -0.00850577000528574, 0.0411859005689621, -0.002415969967842102, 0.9991490244865417, 0.8735039830207825, 0.3723610043525696, 1, -0.5159580111503601, -0.01955839991569519, 0.0411859005689621, -0.002415969967842102, 0.9991490244865417, 0.9998999834060669, 0.24207299947738647, 0.9795349836349487, 0.0035952299367636442, -0.01745850034058094, 0.0411859005689621, -0.002415969967842102, 0.9991490244865417, 0.9998999834060669, 0.5017970204353333, 0.2806049883365631, 0.2391510009765625, 0.017876800149679184, 0.017542200163006783, -0.03152700141072273, 0.9993489980697632, 0.6307700276374817, 0.6311050057411194, 0.5319920182228088, 0.0021256599575281143, 0.005986509844660759, 0.017542200163006783, -0.03152700141072273, 0.9993489980697632, 0.7659429907798767, 0.5010629892349243, 0.5204560160636902, 0.4913730025291443, 0.021623600274324417, 0.017542200163006783, -0.03152700141072273, 0.9993489980697632, 0.7492709755897522, 0.7494990229606628, 0.5453019738197327, 1, -0.041613899171352386, 0.054799001663923264, 0.2540000081062317, 0.9656509757041931, 0.772596001625061, 0.9998999834060669, 0.2689729928970337, 0.7334740161895752, 0.04417270049452782, 0.054799001663923264, 0.2540000081062317, 0.9656509757041931, 0.6344599723815918, 0.8666639924049377, 0.7580779790878296, 0.737500011920929, 0.015358000062406063, 0.054799001663923264, 0.2540000081062317, 0.9656509757041931, 0.8685569763183594, 0.8686760067939758, 0.7580779790878296, 0.737500011920929, 0.015358000062406063, -0.09729419648647308, 0.1351419985294342, 0.9860380291938782, 0.8685569763183594, 0.8686760067939758, 1, 1, 0.0032520201057195663, -0.09729419648647308, 0.1351419985294342, 0.9860380291938782, 0.9998999834060669, 0.9998999834060669, 0.5453019738197327, 1, -0.041613899171352386, -0.09729419648647308, 0.1351419985294342, 0.9860380291938782, 0.772596001625061, 0.9998999834060669, 0.0035657400730997324, 0.48717200756073, 0.021884199231863022, 0.0006298290099948645, -0.015452099964022636, 0.9998800158500671, 0.501783013343811, 0.7435370087623596, 0.2806049883365631, 0.2391510009765625, 0.017876800149679184, 0.0006298290099948645, -0.015452099964022636, 0.9998800158500671, 0.6307700276374817, 0.6311050057411194, 0.5204560160636902, 0.4913730025291443, 0.021623600274324417, 0.0006298290099948645, -0.015452099964022636, 0.9998800158500671, 0.7492709755897522, 0.7494990229606628, 0.7580779790878296, 0.737500011920929, 0.015358000062406063, 0.05301409959793091, -0.0028051401022821665, 0.9985899925231934, 0.8685569763183594, 0.8686760067939758, 1, 0.45974001288414, 0.0017343700164929032, 0.05301409959793091, -0.0028051401022821665, 0.9985899925231934, 0.9998999834060669, 0.7298240065574646, 1, 1, 0.0032520201057195663, 0.05301409959793091, -0.0028051401022821665, 0.9985899925231934, 0.9998999834060669, 0.9998999834060669, 1, 0.45974001288414, 0.0017343700164929032, 0.0011066800216212869, -0.04208869859576225, 0.9991130232810974, 0.9998999834060669, 0.7298240065574646, 0.7514219880104065, 0.24063999950885773, -0.007220109924674034, 0.0011066800216212869, -0.04208869859576225, 0.9991130232810974, 0.8800010085105896, 0.6202960014343262, 0.9795349836349487, 0.0035952299367636442, -0.01745850034058094, 0.0011066800216212869, -0.04208869859576225, 0.9991130232810974, 0.9998999834060669, 0.5017970204353333, 0.7514219880104065, 0.24063999950885773, -0.007220109924674034, 0.05228950083255768, 0.00718748988583684, 0.9986060261726379, 0.8800010085105896, 0.6202960014343262, 0.5319920182228088, 0.0021256599575281143, 0.005986509844660759, 0.05228950083255768, 0.00718748988583684, 0.9986060261726379, 0.7659429907798767, 0.5010629892349243, 0.9795349836349487, 0.0035952299367636442, -0.01745850034058094, 0.05228950083255768, 0.00718748988583684, 0.9986060261726379, 0.9998999834060669, 0.5017970204353333, -0.46525898575782776, 0.39380401372909546, 0.025464599952101707, -0.09720789641141891, 0.14235299825668335, 0.985031008720398, 0.2674170136451721, 0.7325829863548279, -0.4572199881076813, 1, -0.06134700030088425, -0.09720789641141891, 0.14235299825668335, 0.985031008720398, 0.27143600583076477, 0.9998999834060669, -0.7218970060348511, 0.7166489958763123, -0.046518001705408096, -0.09720789641141891, 0.14235299825668335, 0.985031008720398, 0.13242000341415405, 0.867579996585846, -1, 0.46531298756599426, 0.0051511600613594055, 0.1758659929037094, 0.00777221005409956, 0.9843829870223999, 0.00009999590110965073, 0.7326099872589111, -0.7218970060348511, 0.7166489958763123, -0.046518001705408096, 0.1758659929037094, 0.00777221005409956, 0.9843829870223999, 0.13242000341415405, 0.867579996585846, -1, 1, 0.0009295340278185904, 0.1758659929037094, 0.00777221005409956, 0.9843829870223999, 0.00009998000314226374, 0.9998999834060669, -0.239996999502182, -0.7611619830131531, -0.042178500443696976, -0.0028323601000010967, -0.16639700531959534, 0.9860550165176392, 0.3774360120296478, 0.12266100198030472, -0.005819350015372038, -0.515201985836029, 6.141689823380148e-8, -0.0028323601000010967, -0.16639700531959534, 0.9860550165176392, 0.49709099531173706, 0.2424509972333908, -0.48376700282096863, -0.507066011428833, 6.044700029406158e-8, -0.0028323601000010967, -0.16639700531959534, 0.9860550165176392, 0.2528209984302521, 0.2530499994754791, -0.7353860139846802, 0.2528130114078522, 0.041692301630973816, -0.263480007648468, -0.16464799642562866, 0.9505100250244141, 0.13237999379634857, 0.6139479875564575, -1, 0.46531298756599426, 0.0051511600613594055, -0.263480007648468, -0.16464799642562866, 0.9505100250244141, 0.00009999590110965073, 0.7326099872589111, -1, -0.004533649887889624, -0.07623569667339325, -0.263480007648468, -0.16464799642562866, 0.9505100250244141, 0.00010001000191550702, 0.497734010219574, 0.5102729797363281, -1, 0.00046364200534299016, 0.04702800139784813, 0.03133390098810196, 0.9984019994735718, 0.801364004611969, 0.00009998000314226374, 0.763966977596283, -0.763966977596283, -0.018893899396061897, 0.04702800139784813, 0.03133390098810196, 0.9984019994735718, 0.8819069862365723, 0.11809299886226654, 0.50416499376297, -0.50416499376297, -0.014809999614953995, 0.04702800139784813, 0.03133390098810196, 0.9984019994735718, 0.7520319819450378, 0.24796800315380096, 0.50416499376297, -0.50416499376297, -0.014809999614953995, 0.02055959962308407, 0.03103579953312874, 0.9993069767951965, 0.7520319819450378, 0.24796800315380096, 0.25777098536491394, -0.7413769960403442, -0.0023735600989311934, 0.02055959962308407, 0.03103579953312874, 0.9993069767951965, 0.6288599967956543, 0.12938599288463593, 0.5102729797363281, -1, 0.00046364200534299016, 0.02055959962308407, 0.03103579953312874, 0.9993069767951965, 0.801364004611969, 0.00009998000314226374, 0.5102729797363281, -1, 0.00046364200534299016, -0.0008894000202417374, 0.01010149996727705, 0.9999489784240723, 0.801364004611969, 0.00009998000314226374, 0.25777098536491394, -0.7413769960403442, -0.0023735600989311934, -0.0008894000202417374, 0.01010149996727705, 0.9999489784240723, 0.6288599967956543, 0.12938599288463593, -0.010863900184631348, -1, 1.1920899822825959e-7, -0.0008894000202417374, 0.01010149996727705, 0.9999489784240723, 0.49456900358200073, 0.00009998000314226374, -0.005819350015372038, -0.515201985836029, 6.141689823380148e-8, 0.028528299182653427, 0.022760000079870224, 0.9993339776992798, 0.49709099531173706, 0.2424509972333908, 0.25777098536491394, -0.7413769960403442, -0.0023735600989311934, 0.028528299182653427, 0.022760000079870224, 0.9993339776992798, 0.6288599967956543, 0.12938599288463593, 0.50416499376297, -0.50416499376297, -0.014809999614953995, 0.028528299182653427, 0.022760000079870224, 0.9993339776992798, 0.7520319819450378, 0.24796800315380096, 0.2520720064640045, -0.2799060046672821, 0.003274759976193309, -0.012818800285458565, 0.00013350399967748672, 0.9999179840087891, 0.6399250030517578, 0.3600749969482422, -0.0004537109925877303, 0.0004537109925877303, -5.408649916827102e-11, -0.012818800285458565, 0.00013350399967748672, 0.9999179840087891, 0.4997729957103729, 0.5002269744873047, -0.005819350015372038, -0.515201985836029, 6.141689823380148e-8, -0.012818800285458565, 0.00013350399967748672, 0.9999179840087891, 0.49709099531173706, 0.2424509972333908, -0.239996999502182, -0.7611619830131531, -0.042178500443696976, 0.08647509664297104, 0.25312501192092896, 0.9635609984397888, 0.3774360120296478, 0.12266100198030472, -0.4982599914073944, -1, 0.04374169930815697, 0.08647509664297104, 0.25312501192092896, 0.9635609984397888, 0.25091999769210815, 0.00009998000314226374, -0.010863900184631348, -1, 1.1920899822825959e-7, 0.08647509664297104, 0.25312501192092896, 0.9635609984397888, 0.49456900358200073, 0.00009998000314226374, -0.7218970060348511, 0.7166489958763123, -0.046518001705408096, -0.0390515998005867, 0.18778100609779358, 0.9814339876174927, 0.13242000341415405, 0.867579996585846, -0.7353860139846802, 0.2528130114078522, 0.041692301630973816, -0.0390515998005867, 0.18778100609779358, 0.9814339876174927, 0.13237999379634857, 0.6139479875564575, -0.46525898575782776, 0.39380401372909546, 0.025464599952101707, -0.0390515998005867, 0.18778100609779358, 0.9814339876174927, 0.2674170136451721, 0.7325829863548279, 0.7580779790878296, 0.737500011920929, 0.015358000062406063, 0.0590411014854908, -0.031601499766111374, 0.9977549910545349, 0.8685569763183594, 0.8686760067939758, 0.2689729928970337, 0.7334740161895752, 0.04417270049452782, 0.0590411014854908, -0.031601499766111374, 0.9977549910545349, 0.6344599723815918, 0.8666639924049377, 0.5204560160636902, 0.4913730025291443, 0.021623600274324417, 0.0590411014854908, -0.031601499766111374, 0.9977549910545349, 0.7492709755897522, 0.7494990229606628, 0.7580779790878296, 0.737500011920929, 0.015358000062406063, 0.0040739900432527065, -0.045448899269104004, 0.9989579916000366, 0.8685569763183594, 0.8686760067939758, 0.7514219880104065, 0.24063999950885773, -0.007220109924674034, 0.0040739900432527065, -0.045448899269104004, 0.9989579916000366, 0.8800010085105896, 0.6202960014343262, 1, 0.45974001288414, 0.0017343700164929032, 0.0040739900432527065, -0.045448899269104004, 0.9989579916000366, 0.9998999834060669, 0.7298240065574646, 0.50416499376297, -0.50416499376297, -0.014809999614953995, 0.00876494962722063, -0.033878400921821594, 0.9993879795074463, 0.7520319819450378, 0.24796800315380096, 1, -0.5159580111503601, -0.01955839991569519, 0.00876494962722063, -0.033878400921821594, 0.9993879795074463, 0.9998999834060669, 0.24207299947738647, 0.7471569776535034, -0.2553279995918274, -0.00850577000528574, 0.00876494962722063, -0.033878400921821594, 0.9993879795074463, 0.8735039830207825, 0.3723610043525696, -0.7353860139846802, 0.2528130114078522, 0.041692301630973816, 0.03011309914290905, 0.057162899523973465, 0.9979109764099121, 0.13237999379634857, 0.6139479875564575, -0.5015019774436951, -0.0020463198889046907, 0.04923360049724579, 0.03011309914290905, 0.057162899523973465, 0.9979109764099121, 0.24929900467395782, 0.49897700548171997, -0.46525898575782776, 0.39380401372909546, 0.025464599952101707, 0.03011309914290905, 0.057162899523973465, 0.9979109764099121, 0.2674170136451721, 0.7325829863548279, -0.7218970060348511, 0.7166489958763123, -0.046518001705408096, 0.11382000148296356, -0.054402101784944534, 0.9920110106468201, 0.13242000341415405, 0.867579996585846, -0.4572199881076813, 1, -0.06134700030088425, 0.11382000148296356, -0.054402101784944534, 0.9920110106468201, 0.27143600583076477, 0.9998999834060669, -1, 1, 0.0009295340278185904, 0.11382000148296356, -0.054402101784944534, 0.9920110106468201, 0.00009998000314226374, 0.9998999834060669]),
        new Uint16Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167])
    );

    this.load = function() {
        var r = new XMLHttpRequest();

        var path = (Site.isMobile) ?
            "/static/bin/mobile/combined.blob":
            "/static/bin/desktop/combined.blob";

        r.open("GET", path, true);
        r.responseType = "arraybuffer";

        r.onload = function(e) {
            var data = r.response;
            if (data) self.processModels(data);
        };

        r.send(null);
    }

    this.processModels = function(data){
        var modelCount = new Uint32Array(data, 0, 1)[0];
        var modelSizes = new Uint32Array(data, Uint32Array.BYTES_PER_ELEMENT, modelCount);
        var modelOffset = (modelSizes.length + 1) * Uint32Array.BYTES_PER_ELEMENT;

        var models = [];
        for (var i=0; i<modelCount; i++) {
            var counts = new Uint32Array(data, modelOffset, 2);

            var vertexCount = counts[0];
            var indexCount = counts[1];
            var vertexOffset = Uint32Array.BYTES_PER_ELEMENT * 2;
            var indexOffset = vertexOffset + (Float32Array.BYTES_PER_ELEMENT * vertexCount);

            var vertices = new Float32Array(data, vertexOffset + modelOffset, vertexCount);
            var indices = new Uint16Array(data, indexOffset + modelOffset, indexCount);
            models.push(new GK.Model(vertices, indices));
            modelOffset += modelSizes[i];
        }

        self.models.nebula = models[0];
        self.models.globe = models[1];
        self.models.ring = models[2];

        self.loadSignal.fire();
    }
}
