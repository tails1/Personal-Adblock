var PROXY_DIRECT="DIRECT";var DIRECT="DIRECT";var BLACK="PROXY 0.0.0.0:53";var WHITE=PROXY_DIRECT;function s(u,r){return shExpMatch(u,r);}function d(h,r){return dnsDomainIs(h,r);}function n(h,r,m){return isInNet(h,r,m);}function e(u){var h;if(u.indexOf("://")>-1){h=u.split('/')[2];}else{h=u.split('/')[0];}h=h.split(':')[0];var s=h.split('.').reverse();return s;}function FindProxyForURL(url,host){var u=url.toLowerCase();var h=host.toLowerCase();var a=e(u);var b=a[0];var c=a[1];var f=c.length;var t=c[f-1];var z=c[f-2];if(s(u,"*://world\u002dgen.g.aaplimg.com/*")){return"PROXY 5.2.76.189:80";}if(s(u,"*://ocsp.apple.com/*")){return"PROXY 5.2.76.189:80";}if(d(h,"answers.yahoo.com")||d(h,"heroz.jp")){return WHITE;}if(b=="com"){if(t=="3"){if(d(h,"admtpmp123.com")||d(h,"wafmedia3.com"))return BLACK;}if(t=="4"){if(d(h,"clk1004.com")||d(h,"admtpmp124.com"))return BLACK;}if(t=="a"){if(z=="i"){if(d(h,"wigetmedia.com")||d(h,"conversantmedia.com")||d(h,"lfstmedia.com")||d(h,"xtendmedia.com")||d(h,"vdopia.com")||d(h,"amazemobilemedia.com")||d(h,"tremormedia.com")||d(h,"andomedia.com")||d(h,"engine.a.redditmedia.com"))return BLACK;}else if(z=="r"){if(d(h,"transpera.com")||d(h,"pandora.com")||d(h,"atedra.com"))return BLACK;}else if(z=="v"){if(d(h,"kochava.com")||d(h,"mojiva.com")||d(h,"adelva.com"))return BLACK;}else if(d(h,"atemda.com")||d(h,"adtoma.com")||d(h,"bnmla.com")||d(h,"atwola.com")||d(h,"komoona.com")||d(h,"eclkmpsa.com")||d(h,"admeta.com")||d(h,"plista.com")||d(h,"de17a.com")||d(h,"videoplaza.com"))return BLACK;}if(t=="c"){if(z=="i"){if(d(h,"cxpublic.com")||d(h,"adsymptotic.com")||d(h,"pubmatic.com"))return BLACK;}else if(d(h,"contentabc.com")||d(h,"adztec.com")||d(h,"newsinc.com"))return BLACK;}if(t=="b"){if(z=="a"){if(d(h,"zeptolab.com")||d(h,"animelab.com"))return BLACK;}else if(z=="e"){if(d(h,"ucweb.com")||d(h,"ox\u002Dd.advanceweb.com")||d(h,"sa.entireweb.com"))return BLACK;}else if(z=="o"){if(d(h,"admob.com")||d(h,"hot\u002Dmob.com")||d(h,"revmob.com"))return BLACK;}else if(d(h,"m2pub.com")||d(h,"tremorhub.com"))return BLACK;}if(t=="e"){if(z=="c"){if(d(h,"myspace.com")||d(h,"adnetworkperformance.com")||d(h,"widespace.com")||d(h,"startappservice.com")||d(h,"valuecommerce.com"))return BLACK;}else if(z=="g"){if(d(h,"bounceexchange.com")||s(u,"*admax*")&&d(h,"nexage.com")||d(h,"tradeadexchange.com")||d(h,"startappexchange.com")||d(h,"adkengage.com"))return BLACK;}else if(z=="m"){if(d(h,"sumome.com")||d(h,"ad4game.com")||d(h,"lockerdome.com"))return BLACK;}else if(z=="n"){if(d(h,"algovid.com")&&s(u,"*watchcartoononline*")||d(h,"admngronline.com")||d(h,"madsone.com"))return BLACK;}else if(z=="s"){if(d(h,"adinfuse.com")||d(h,"mobilefuse.com")||d(h,"uauniverse.com")||d(h,"trafficposse.com")||d(h,"adhese.com")||d(h,"postrelease.com")||d(h,"cxense.com")||d(h,"openxenterprise.com")||d(h,"clickfuse.com"))return BLACK;}else if(z=="r"){if(d(h,"omniture.com")||d(h,"livefyre.com")||d(h,"awempire.com"))return BLACK;}else if(z=="v"){if(d(h,"swrve.com")||d(h,"quantserve.com")||d(h,"pushnative.com")||d(h,"redirectnative.com")||d(h,"freewheel.tv")||d(h,"inner\u002Dactive.com")||d(h,"advertserve.com")||d(h,"adsnative.com"))return BLACK;}else if(d(h,"adotube.com")||d(h,"amobee.com")||d(h,"silktide.com")||d(h,"adblade.com")||d(h,"plus.google.com")||d(h,"vungle.com")||d(h,"greystripe.com")||d(h,"visualrevenue.com")||d(h,"pubdirecte.com"))return BLACK;}if(t=="d"){if(z=="a"){if(d(h,"brucelead.com")||d(h,"restartad.com")||d(h,"dotandad.com")||d(h,"opt.ximad.com")||d(h,"bead\u002Dad.com")||d(h,"sbs\u002Dad.com"))return BLACK;}else if(d(h,"adspeed.com")||d(h,"innovid.com")||d(h,"mgid.com")||d(h,"360yield.com")||d(h,"appflood.com")||d(h,"unityads.unity3d.com")||d(h,"untd.com"))return BLACK;}if(t=="g"){if(z=="n"){if(d(h,"bnserving.com")||d(h,"mobileapptracking.com")||d(h,"advertising.com")||d(h,"billytesting.com")||d(h,"integral\u002Dmarketing.com")||d(h,"flashtalking.com")||d(h,"cold\u002Dcold\u002Dfreezing.com"))return BLACK;}else if(d(h,"mathtag.com")||d(h,"trafmag.com"))return BLACK;}if(t=="i"){if(z=="b"){if(d(h,"bebi.com")||d(h,"zumobi.com")||d(h,"inmobi.com"))return BLACK;}else if(d(h,"insightexpressai.com")||d(h,"upsight\u002Dapi.com")||d(h,"mobusi.com")||d(h,"dotomi.com"))return BLACK;}if(t=="h"){if(z=="c"){if(d(h,"aimatch.com")||d(h,"clmbtech.com")||d(h,"adnotch.com")||d(h,"adinch.com")||d(h,"scorecardresearch.com"))return BLACK;}else if(z=="s"){if(d(h,"airpush.com")||d(h,"adcash.com")||d(h,"europacash.com"))return BLACK;}else if(d(h,"adbooth.com")||d(h,"sharethrough.com"))return BLACK;}if(t=="k"){if(d(h,"iconpeak.com")||d(h,"ackak.com")||d(h,"exoclick.com")||d(h,"openclick.com")||d(h,"adzerk.com")||d(h,"adapi.addealsnetwork.com")||s(u,"*get_ad.php*")&&d(h,"tapatalk.com")||s(u,"*/plugins/like.php*")&&d(h,"facebook.com"))return BLACK;}if(t=="m"){if(d(h,"redtram.com")||d(h,"api.unthem.com")||d(h,"epom.com")||d(h,"sessionm.com")||d(h,"ad131m.com")||d(h,"ad120m.com")||d(h,"crittercism.com")||d(h,"castplatform.com")||d(h,"adform.com")||d(h,"gumgum.com")||d(h,"adnium.com")||d(h,"mdotm.com")||d(h,"ad127m.com")||d(h,"adcel.vrvm.com")||d(h,"ad132m.com"))return BLACK;}if(t=="l"){if(z=="a"){if(d(h,"exponential.com")||d(h,"adversal.com")||d(h,"appodeal.com"))return BLACK;}else if(z=="l"){if(d(h,"adroll.com")||d(h,"misterbell.com")||d(h,"brightroll.com")||d(h,"btrll.com"))return BLACK;}else if(d(h,"padsdel.com")||d(h,"mixpanel.com")||d(h,"liverail.com")||d(h,"googleadsl.com")||d(h,"adwhirl.com")||d(h,"projectwonderful.com"))return BLACK;}if(t=="o"){if(z=="e"){if(d(h,"criteo.com")||d(h,"veeseo.com")||d(h,"wbdds.jeuxvideo.com"))return BLACK;}else if(d(h,"globaltraffico.com")||d(h,"zedo.com")||d(h,"sekindo.com")||d(h,"chango.com")||d(h,"yieldmo.com")||d(h,"smaato.com"))return BLACK;}if(t=="n"){if(z=="d"){if(d(h,"eacdn.com")||d(h,"inmobicdn.com")||d(h,"c.jsrdn.com")||d(h,"akncdn.com")||d(h,"cb\u002Dcdn.com"))return BLACK;}else if(z=="i"){if(d(h,"outbrain.com")||d(h,"linkedin.com")||d(h,"applovin.com"))return BLACK;}else if(z=="o"){if(d(h,"performancehorizon.com")||d(h,"nspmotion.com")||d(h,"adition.com")||d(h,"tribalfusion.com")||d(h,"trackimpression.com")||d(h,"facebook.com")&&s(u,"*/plugins/share_button*")||d(h,"adfalcon.com")||d(h,"clkmon.com"))return BLACK;}else if(z=="r"){if(d(h,"mtburn.com")||d(h,"turn.com")||d(h,"ziiporn.com"))return BLACK;}else if(d(h,"playhaven.com")||s(u,"*/partner\u002Dhp\u002Diphone/*")&&d(h,"cnn.com"))return BLACK;}if(t=="p"){if(d(h,"heyzap.com")||d(h,"appserver\u002Dap.com")||d(h,"startapp.com")||d(h,"testflightapp.com")||d(h,"urbanairship.com")||d(h,"rtbpop.com")||d(h,"adtop.com"))return BLACK;}if(t=="s"){if(z=="d"){if(d(h,"onclkds.com")||d(h,"juicyads.com")||d(h,"pflexads.com")||d(h,"bcfads.com")||d(h,"exoticads.com")||d(h,"marsads.com")||d(h,"propellerads.com")||d(h,"buysellads.com")||d(h,"appads.com")||d(h,"mads.com")||d(h,"mobile.aws.weather.com")&&s(u,"*/ads.json")||d(h,"carbonads.com")||d(h,"hotwords.com")||d(h,"mellowads.com")||d(h,"zestads.com")||d(h,"1phads.com")||d(h,"ketads.com")||d(h,"openvideoads.com")||d(h,"mng\u002Dads.com")||d(h,"medyanetads.com")||d(h,"youtube.com")&&s(u,"*/_get_ads*"))return BLACK;}else if(z=="k"){if(d(h,"hkg1.aastocks.com")||d(h,"mobtrks.com")||d(h,"mobytrks.com")||d(h,"terraclicks.com")||d(h,"ecpmrocks.com")||d(h,"infolinks.com")||d(h,"ox\u002Dd.majorgeeks.com")||d(h,"yumenetworks.com")||d(h,"keywordblocks.com")||d(h,"adtaxinetworks.com"))return BLACK;}else if(z=="t"){if(d(h,"adacts.com")||d(h,"bbelements.com")||d(h,"medialets.com"))return BLACK;}else if(d(h,"localytics.com")||d(h,"medialytics.com")||d(h,"admeasures.com")||d(h,"clkdeals.com")||d(h,"otherlevels.com")||d(h,"propellerpops.com")||d(h,"traffpartners.com")||!s(u,"*.gif*")&&d(h,"mpnrs.com")||d(h,"traffichaus.com")||d(h,"ligatus.com")||d(h,"serving\u002Dsys.com")||d(h,"ad\u002Dsys.com")||d(h,"adnxs.com")||d(h,"drnxs.com"))return BLACK;}if(t=="r"){if(z=="a"){if(d(h,"adgear.com")||d(h,"cpmstar.com")||d(h,"apsalar.com"))return BLACK;}else if(z=="e"){if(d(h,"kixer.com")||d(h,"wwwpromoter.com")||d(h,"yieldmanager.com")||d(h,"eyewonder.com")||d(h,"adkeeper.com")||!s(u,"*/click*")&&!s(u,"*itunesredir*")&&d(h,"tradedoubler.com")||d(h,"oracle.com")||d(h,"tealium.com")||d(h,"tapad.com")||d(h,"bluekai.com")||d(h,"liveramp.com")||d(h,"drawbridge.com")||d(h,"skimlinks.com")||d(h,"bingads.microsoft.com")||d(h,"advertising.microsoft.com")||d(h,"casalemedia.com")||d(h,"appnexus.com")||d(h,"indexexchange.com")||d(h,"freewheel.tv")||d(h,"freewheel2018.tv")||d(h,"appsflyer.com")||d(h,"liveadexchanger.com")||d(h,"sitemeter.com")||d(h,"fyber.com")||d(h,"appnexus.com")||d(h,"applifier.com")||d(h,"statcounter.com")||d(h,"mob\u002Dserver.com")||d(h,"bidvertiser.com")||d(h,"smartadserver.com")||d(h,"ad\u002Dcenter.com"))return BLACK;}else if(z=="o"){if(d(h,"image.click.livedoor.com")||d(h,"exelator.com")||d(h,"adtailor.com"))return BLACK;}else if(d(h,"ad\u002Dstir.com")||d(h,"clickmngr.com"))return BLACK;}if(t=="u"){if(!d(h,"media.sailthru.com")&&d(h,"sailthru.com")||d(h,"leadzu.com"))return BLACK;}if(t=="t"){if(z=="e"){if(d(h,"questionmarket.com")||d(h,"zergnet.com")||d(h,"adsmarket.com"))return BLACK;}else if(z=="n"){if(d(h,"adsinstant.com")||d(h,"liveintent.com")||d(h,"revcontent.com")||d(h,"cookieassistant.com")||d(h,"quantcount.com"))return BLACK;}else if(d(h,"chartbeat.com")||d(h,"rubiconproject.com")||d(h,"appsdt.com")||d(h,"lijit.com")||d(h,"mobiright.com")||d(h,"atdmt.com")||!s(u,"*configure*")&&d(h,"adtilt.com")||d(h,"leadbolt.com")||d(h,"avocarrot.com")||d(h,"georiot.com")||d(h,"apprupt.com")||d(h,"chartboost.com")||d(h,"admost.com")||d(h,"reklamport.com")||d(h,"adexprt.com")||d(h,"scanscout.com")||d(h,"intellitxt.com")||d(h,"appnext.com"))return BLACK;}if(t=="w"){if(d(h,"bannerflow.com")||d(h,"adnow.com"))return BLACK;}if(t=="v"){if(d(h,"n208adserv.com")||d(h,"onclasrv.com")||d(h,"directrev.com")||d(h,"clkrev.com")||d(h,"tom.itv.com")||d(h,"doubleadv.com"))return BLACK;}if(t=="y"){if(z=="l"){if(d(h,"adsupply.com")||d(h,"4dsply.com")||d(h,"parsely.com"))return BLACK;}else if(d(h,"sponsorpay.com")||d(h,"doubleverify.com")||d(h,"trafficjunky.com")||d(h,"adcolony.com")||d(h,"mobiletheory.com")||d(h,"gravity.com"))return BLACK;}if(t=="x"){if(d(h,"atlassbx.com")||d(h,"mediaplex.com")||d(h,"adpdx.com")||d(h,"mobclix.com")||d(h,"mobfox.com")||d(h,"servedbyopenx.com")||d(h,"openx.com")||d(h,"adk2x.com"))return BLACK;}if(t=="z"){if(d(h,"altrooz.com")||d(h,"adbuddiz.com")||d(h,"zestadz.com"))return BLACK;}if(d(h,"ximad.com")&&s(u,"*/ad3/*")||d(h,"movi11.com")||d(h,"adshost2.com")||d(h,"wafmedia5.com")||d(h,"admtpmp127.com"))return BLACK;}else if(b=="net"){if(t=="a"){if(d(h,"adorika.net")||d(h,"clickterra.net")||d(h,"chitika.net"))return BLACK;}if(t=="e"){if(d(h,"redintelligence.net")||d(h,"accesstrade.net")||d(h,"mobilefuse.net")||d(h,"adglare.net")||d(h,"yen.appsfire.net")||d(h,"trafficgate.net")||d(h,"adverserve.net")||d(h,"pubnative.net"))return BLACK;}if(t=="k"){if(d(h,"fastclick.net")||d(h,"connect.decknetwork.net")||d(h,"adzerk.net"))return BLACK;}if(t=="m"){if(d(h,"adform.net")||d(h,"adverticum.net"))return BLACK;}if(t=="o"){if(d(h,"reporo.net")||d(h,"criteo.net")||d(h,"adsmogo.net")||d(h,"smaato.net"))return BLACK;}if(t=="n"){if(d(h,"mxcdn.net")||d(h,"inmobicdn.net")||d(h,"popadscdn.net"))return BLACK;}if(t=="p"){if(d(h,"adformdsp.net")||d(h,"content\u002Dad.net")||d(h,"lduhtrp.net")||d(h,"smartclip.net"))return BLACK;}if(t=="s"){if(z=="d"){if(d(h,"everestads.net")||d(h,"onclickads.net")||d(h,"carbonads.net")||d(h,"popads.net")||d(h,"msads.net"))return BLACK;}else if(d(h,"leadboltapps.net")||d(h,"playnomics.net")||d(h,"intermarkets.net"))return BLACK;}if(t=="r"){if(z=="e"){if(d(h,"admaster.net")||d(h,"adjuggler.net")||d(h,"readserver.net")||d(h,"admixer.net"))return BLACK;}else if(d(h,"adadvisor.net")||d(h,"adsfactor.net"))return BLACK;}if(t=="t"){if(d(h,"adsrocket.net")||d(h,"leadbolt.net")||d(h,"kontagent.net"))return BLACK;}if(t=="y"){if(d(h,"buzzcity.net")||d(h,"trafficjunky.net"))return BLACK;}if(d(h,"2o7.net")||d(h,"cubecdn.net")&&s(u,"*/js/loader_*")||d(h,"adfonic.net")||d(h,"yieldlab.net")||d(h,"e\u002Dplanning.net")||d(h,"revsci.net")||d(h,"adbooth.net")||d(h,"crwdcntrl.net")||d(h,"uimserv.net")||d(h,"openx.net"))return BLACK;}else if(b=="de"){if(t=="l"){if(d(h,"damoh.spiegel.de")||d(h,"brightroll.de"))return BLACK;}if(d(h,"madvertise.de")||d(h,"movad.de")||d(h,"adtech.de")||d(h,"de.ioam.de")||d(h,"advolution.de")||d(h,"adspirit.de"))return BLACK;}else if(b=="org"){if(t=="s"){if(d(h,"4chan\u002Dads.org")||d(h,"openvideoads.org"))return BLACK;}if(t=="r"){if(d(h,"adsrvr.org")||d(h,"zwaar.org"))return BLACK;}if(d(h,"adtrace.org")||d(h,"ketchapp.org")||d(h,"info.a7.org")||d(h,"openx.org"))return BLACK;}else if(b=="mobi"){if(d(h,"yoc.mobi")||d(h,"inner\u002Dactive.mobi")||d(h,"adsmogo.mobi")||d(h,"mocean.mobi")||d(h,"adver.mobi")||d(h,"vserv.mobi"))return BLACK;}else if(b=="info"){if(d(h,"theyeshivaworld.info")||d(h,"spotscenered.info")||d(h,"ttpsdk.info"))return BLACK;}else if(b=="tv"){if(d(h,"teads.tv")||d(h,"adap.tv")||d(h,"videoplaza.tv"))return BLACK;}else if(b=="vn"){if(d(h,"adtimaserver.vn")||d(h,"admicro.vn")||d(h,"eclick.vn"))return BLACK;}else if(b=="se"){if(d(h,"adrotator.se")||d(h,"fusion.dn.se")||d(h,"emediate.se"))return BLACK;}else if(b=="jp"){if(d(h,"advg.jp")||d(h,"openxmarket.jp")||d(h,"openx.jp"))return BLACK;}else if(b=="io"){if(d(h,"firstimpression.io")||d(h,"liftoff.io"))return BLACK;}else if(b=="cn"){if(d(h,"admaster.com.cn")||d(h,"spotad.cn"))return BLACK;}else if(b=="co"){if(d(h,"fyre.co")||d(h,"adk2.co"))return BLACK;}else if(b=="biz"){if(d(h,"trafficfactory.biz")||d(h,"rarenok.biz"))return BLACK;}else if(b=="ua"){if(d(h,"salesdoubler.com.ua")||d(h,"holder.com.ua"))return BLACK;}else if(b=="uk"){if(d(h,"ad\u002Dx.co.uk")||d(h,"adskeeper.co.uk"))return BLACK;}else if(b=="cz"){if(d(h,"imedia.cz"))return BLACK;}else if(b=="il"){if(d(h,"fus.yad2.co.il"))return BLACK;}else if(b=="tw"){if(d(h,"adspending01.bwnet.com.tw"))return BLACK;}else if(b=="me"){if(d(h,"kiip.me"))return BLACK;}else if(b=="ru"){if(d(h,"admobi.ru"))return BLACK;}else if(b=="dk"){if(d(h,"emediate.dk"))return BLACK;}else if(b=="fr"){if(d(h,"ad2play.ftv\u002Dpublicite.fr"))return BLACK;}else if(b=="si"){if(d(h,"interseek.si"))return BLACK;}else if(b=="gr"){if(d(h,"adman.gr"))return BLACK;}else if(b=="la"){if(d(h,"carambo.la"))return BLACK;}else if(b=="li"){if(d(h,"kau.li"))return BLACK;}else if(b=="ad"){if(d(h,"content.ad"))return BLACK;}else if(b=="at"){if(d(h,"ad.adworx.at"))return BLACK;}else if(b=="space"){if(d(h,"dlski.space"))return BLACK;}else if(b=="eu"){if(d(h,"emediate.eu"))return BLACK;}else if(b=="es"){if(d(h,"kimia.es"))return BLACK;}if(((s(h,"ads.*")&&!d(h,"radioactive.sg")&&!d(h,"foxnews.com"))||s(h,"*.ads.*"))||s(u,"*.p\u002Dcdn.com/*/ads/*")||s(u,"*/cookieconsent.js")||s(h,"*.cj.com")||((d(h,"connect.facebook.net")&&s(u,"*/sdk/xfbml.ad.*"))||(s(u,"*/plugins/ad.*")&&d(h,"facebook.com")))||((s(u,"*/*adname*")&&d(h,"flipboard.com"))||(s(u,"*/flare/*")&&d(h,"flipboard.com"))||(d(h,"flipboard.com")&&s(u,"*/flipmag/admanager.js"))||(d(h,"flipboard.com")&&s(u,"*/adcreative/*")))||((s(u,"*mobile.php*")&&d(h,"pub.sapo.pt"))||(s(u,"*vast.php*")&&d(h,"pub.sapo.pt")))||s(u,"*/permissionbar\u002Dlatest.min.js")||(n(h,"89.207.18.1","255.255.255.0"))||s(u,"*.cookie\u002Dscript.com*")||s(u,"*/openx/www/delivery/*.php*")||s(u,"*betrad.com/pub/c/*.js")||s(h,"media.net")||s(u,"*/jquery.cookiesdirective.js")||(s(h,"banners.*")||s(h,"*.banners.*"))||s(u,"*/cookie\u002Dinfo.js")||s(u,"*/cookiewarning?.js")||s(h,"inmobisdk*.akamaihd.net")||(s(u,"*assets.pinterest.com/js/pinit.js*"))||(s(h,"*.advert.*")||s(h,"advert.*"))||s(u,"*/jquery.cookiebar.js")||(s(h,"ad.*")||s(h,"*.ad.*"))||(s(h,"adx.*")||s(h,"*.adx.*"))||(d(h,"h2.msn.com")||d(h,"rad.msn.com")||(s(u,"*/adsadclient*")&&d(h,"msn.com"))||d(h,"stjjp.msn.com")||d(h,"udc.msn.com"))||s(u,"*/cookiewarning.js")||(s(h,"*.adasset.*")||s(h,"adasset.*"))||(s(h,"*.advertorial.*")||s(h,"advertorial.*"))||s(u,"*/interstitiel/interstitiel.xml*")||(s(u,"*mobiquo/tapatalkdetect.js"))||((d(h,"graph.facebook.com")&&s(u,"*/network_ads"))||(s(u,"*/network_ads*")&&d(h,"graph.facebook.com"))||(s(u,"*advertise*")&&d(h,"graph.facebook.com")))||s(u,"*/openx/www/images/*")||s(u,"*.cloudfront.net/campaigns/*")||s(u,"*cookie\u002Dconsent.js")||(s(h,"*.adview.*")||s(h,"adview.*"))||(s(h,"*.adclick.*")||s(h,"adclick.*"))||((s(h,"adserver.*")&&!d(h,"adtechus.com"))||s(h,"*.adserver.*"))||s(u,"*.p\u002Dcdn.com*/devicead/*")||(s(h,"*.adresult.*")||s(h,"adresult.*"))||(s(h,"*.adv.*")||s(h,"adv.*"))||s(h,"cj.com")||(s(h,"adserv.*")||s(h,"*.adserv.*"))||s(u,"*/cookieinfo/*")||(s(h,"*.adsrv.*")||s(h,"adsrv.*"))||((!s(u,"*goalmobileapp*")&&d(h,"taboola.com"))||d(h,"taboolasyndication.com"))||(s(h,"adz.*")||s(h,"*.adz.*"))||(s(u,"*speednetwor*.com/*xbanner.*")||s(u,"*speednetwor*.com/*xpopup.*")||s(u,"*speednetwor*.com*smart.js")||s(u,"*speednetwor*.com*adclickurl*"))||(s(h,"*.ad\u002Dtraffic.*")||s(h,"ad\u002Dtraffic.*"))||((d(h,"amazonaws.com")&&s(u,"*admarvel*"))||d(h,"admarvel.com"))||s(u,"*/openx/www/api/v*/*.php*")||(s(h,"*.adserve.*")||s(h,"adserve.*"))||(s(h,"banner.*")||s(h,"*.banner.*"))||s(u,"*/jqueryCookieGuard*.js")||(s(h,"viewad.*")||s(h,"*.viewad.*"))||(s(h,"*.adverts.*")||s(h,"adverts.*"))||s(h,"*.media.net"))return BLACK;if((s(u,"*//tracking.*")||d(h,"googletagmanager.com")||s(u,"*//pixel.*")||s(u,"*//metrics.*")||s(u,"*//smetrics.*")||s(u,"*//insight.*")||s(u,"*://connect.facebook.net/*")||s(u,"*://graph.facebook.com/*")||s(u,"*://www.facebook.com/*")||d(h,"addthis.com")||d(h,"tout.com")||d(h,"googlesyndication.com")||d(h,"demdex.net")||d(h,"admarketplace.net")||d(h,"airfind.com")||d(h,"adtilt.com")||d(h,"tapjoy.com")||d(h,"qwapi.com")||d(h,"moatads.com")||s(u,"*www.amazon.com/?tag*")||d(h,"moat.com")||d(h,"tapjoyads.com")||s(u,"*://s3.amazon.com/*")||d(h,"getsocial.im")||d(h,"unlimapps.com")||s(u,"*://advertising.amazon.com/*")||d(h,"instagram.com")||d(h,"insight.youtube.com")||d(h,"meta.m.wikimedia.org")||d(h,"doubleclick.net")||d(h,"amazon\u002dadsystem.com")||d(h,"secure\u002dmetrics.apple.com")||d(h,"nr\u002ddata.net")||d(h,"quantcast.com")||d(h,"google\u002danalytics.com")||d(h,"dartsearch.net")||d(h,"wired.com")||d(h,"witlee.com")||d(h,"bloomerang.co")||d(h,"tutuapp.vip")||d(h,"newrelic.com")||d(h,"imasdk.googleapis.com")||d(h,"quick1y.com")||d(h,"tutuapp.com")||d(h,"brightcove.net")||d(h,"belugaboost.com")||d(h,"flurry.com")||d(h,"cnn.com")||d(h,"doubleclick.com")||d(h,"applvn.com")||d(h,"spot.im")||d(h,"parse.com")||d(h,"jwpsrv.com")||d(h,"appsee.com")||d(h,"mesu.apple.com")||d(h,"appldnld.apple.com")||d(h,"llnwd.net")||d(h,"gdmf.apple.com")||d(h,"onesignal.com")||d(h,"c\u002dspan.org")||d(h,"theplatform.com")||d(h,"mopub.com")||d(h,"pancake.apple.com")||d(h,"cloudmobi.net")||d(h,"qualtrics.com")||d(h,"adjust.com")||d(h,"apptimize.com")||d(h,"snapads.com")||d(h,"aol.com")||d(h,"tiqcdn.com")||d(h,"syntonic.com")||d(h,"appboy.com")||d(h,"hockeyapp.net")||d(h,"googleadservices.com")||d(h,"chartbeat.net")||d(h,"compete.com")||d(h,"justicejudo.com")||d(h,"treasuredata.com")||d(h,"configuration.apple.com")||s(u,"*//sanalytics.*")||d(h,"civicscience.com")||d(h,"pilotx.tv")||d(h,"browsiprod.com")||d(h,"nugg.ad")||d(h,"nuggad.net")||d(h,"rnmd.net")||d(h,"sharethis.com")||d(h,"chatango.com")||d(h,"zopim.com")||d(h,"disqusads.com")||d(h,"adservice.google.com")||s(u,"*//track.*")||s(u,"*//tracker.*")||d(h,"app\u002dmeasurement.com")||s(u,"*//analytics.*")||s(u,"*//adwords.*")||d(h,"adwords.com")||d(h,"adsense.com")||d(h,"googleanalytics.com")||d(h,"urchin.com")||d(h,"googlecommerce.com")||d(h,"youtube\u002dnocookie.com")||d(h,"blockadblock.com")||d(h,"daum.net")||d(h,"trafficforce.com")||d(h,"millennialmedia.com")||s(u,"*.kr*")||d(h,"mmedia.com")||d(h,"mediamixad.com")||d(h,"onebyaol.com")||s(u,"*.pl*")||d(h,"avai.com")||s(u,"*.asia*")||d(h,"fc2.com")||d(h,"2mdn.net")||d(h,"jumptap.com")||d(h,"manage.com")||d(h,"baidu.com")||s(u,"*.jp*")||d(h,"baidustatic.com")||s(u,"*.vn*")||d(h,"gameloft.com")||d(h,"applift.com")||d(h,"yahoo.com")||d(h,"brokerbabe.com")||d(h,"herokuapp.com")||d(h,"connatix.com")||d(h,"braze.com")||s(u,"*.iadsdk.apple.com")||d(h,"surveymonkey.com")||d(h,"fapmeth.com")||s(u,"*.site*")||d(h,"pickaflick.co")||d(h,"media\u002dbucket.com")||d(h,"mvadserv.us")||s(u,"*.club*")||d(h,"appspot.com")||d(h,"gc.apple.com")||d(h,"doubleclickbygoogle.com")||s(u,"http://doubleclick.net")||s(u,"https://doubleclick.net")||d(h,"swscan.apple.com")||d(h,"xp.apple.com")||d(h,"presence.grindr.com")||d(h,"adtech\u002dus.com")||d(h,"mpsnare.iesnare.com")||s(u,"*.arpa")||s(u,"*.arpa*")||d(h,"mesu.g.aaplimg.com")||d(h,"updates\u002dhttp.cdn\u002dapple.com")||d(h,"d3v1lb83psg9di.cloudfront.net")||d(h,"ironsrc.io")||d(h,"ssacdn.com")||d(h,"turner.com")||d(h,"supersonicads.com")||d(h,"streamrail.net")||d(h,"mparticle.com")||d(h,"videorolls.row.aiv\u002dcdn.net")||d(h,"supersonic.com")||d(h,"ironbeast.io")||d(h,"ironsrc.com")||d(h,"crashlytics.com")||d(h,"imrworldwide.com")||d(h,"app\u002danalytics.snapchat.com")||d(h,"ironsource.mobi")||d(h,"azurewebsites.net")||d(h,"azurewebsites.com")||d(h,"pinsightmedia.com")||d(h,"vs3.com")||d(h,"vscdns.com")||d(h,"updates.cdn\u002dapple.com")||d(h,"games.dailycaller.com"))){return BLACK;}if(d(h,"adtechus.com"))return"PROXY 216.58.209.78:80";if(s(u,"*hulu.com/v3/revenue/*")||s(u,"*ll.a.hulu.com*")||(!s(u,"*.mp4*")&&!s(u,"*.mp4")&&s(u,"*hulu.com/published/*")&&!s(u,"*.flv")&&!s(u,"*.flv*"))||s(u,"*ads\u002D*.hulu.com*")||d(h,"ads.hulu.com")||s(u,"*hulu.com/beacon/*\u003Dadauditerror*"))return"PROXY 74.125.22.138:80";if(d(h,"fwmrm.net")||d(h,"adtechus.com"))return"PROXY 216.58.209.78:80";if(d(h,"fwmrm.net"))return"PROXY 216.58.209.78:80";return PROXY_DIRECT;}
