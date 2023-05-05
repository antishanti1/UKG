import React from "react";
import calculatePsychSafetyScore from '../ChartInfo/ChartInfo';
import '../Donut/Donut.scss'


function Donut() {

    const apiResponse = {

        "body": {
            "results": [
                {
                    "emotions": {
                        "anger": 0.0065602888353168964,
                        "frustration": 0.004882775247097015,
                        "fear": 0.01091726403683424,
                        "confusion": 0.005103330127894878,
                        "disappointment": 0.027782713994383812,
                        "confidence": 0.9415398836135864,
                        "joy": 0.147349551320076,
                        "satisfaction": 0.6356067657470703,
                        "compassion": 0.10962201654911041,
                        "enthusiasm": 0.03489433601498604,
                        "thoughtful": 0.01896112784743309
                    },
                    "neutrality": {
                        "emotive": 0.9961193499621004,
                        "neutral": 0.0038806500378996134
                    },
                    "polarity": {
                        "positive": 0.9712895330717704,
                        "negative": 0.0287104669282297
                    },
                    "id": "1"
                },
                {
                    "emotions": {
                        "anger": 0.024840405210852623,
                        "frustration": 0.5372122526168823,
                        "fear": 0.010866721160709858,
                        "confusion": 0.017923135310411453,
                        "disappointment": 0.9346616864204407,
                        "confidence": 0.01876048743724823,
                        "joy": 0.2747485935688019,
                        "satisfaction": 0.5060209631919861,
                        "compassion": 0.0434645377099514,
                        "enthusiasm": 0.009991411119699478,
                        "thoughtful": 0.009614835493266582
                    },
                    "neutrality": {
                        "emotive": 0.997084851609543,
                        "neutral": 0.002915148390457034
                    },
                    "polarity": {
                        "positive": 0.3586249778410585,
                        "negative": 0.6413750221589415
                    },
                    "id": "2"
                },
                {
                    "emotions": {
                        "anger": 0.3469160795211792,
                        "frustration": 0.9870571494102478,
                        "fear": 0.06633340567350388,
                        "confusion": 0.026326876133680344,
                        "disappointment": 0.9289641976356506,
                        "confidence": 0.010649099014699459,
                        "joy": 0.028681395575404167,
                        "satisfaction": 0.016627581790089607,
                        "compassion": 0.013862773776054382,
                        "enthusiasm": 0.01429334282875061,
                        "thoughtful": 0.04415197670459747
                    },
                    "neutrality": {
                        "emotive": 0.9790257588028908,
                        "neutral": 0.020974241197109222
                    },
                    "polarity": {
                        "positive": 0.034477100733957516,
                        "negative": 0.9655228992660425
                    },
                    "id": "3"
                },
                {
                    "emotions": {
                        "anger": 0.0056287916377186775,
                        "frustration": 0.004973981995135546,
                        "fear": 0.00206628511659801,
                        "confusion": 0.0033629697281867266,
                        "disappointment": 0.004936717916280031,
                        "confidence": 0.07429342716932297,
                        "joy": 0.9172903299331665,
                        "satisfaction": 0.975123941898346,
                        "compassion": 0.2732102572917938,
                        "enthusiasm": 0.035744454711675644,
                        "thoughtful": 0.004284601658582687
                    },
                    "neutrality": {
                        "emotive": 0.9955004714429379,
                        "neutral": 0.004499528557062149
                    },
                    "polarity": {
                        "positive": 0.9908697805799719,
                        "negative": 0.00913021942002815
                    },
                    "id": "4"
                },
                {
                    "emotions": {
                        "anger": 0.6195055246353149,
                        "frustration": 0.8521166443824768,
                        "fear": 0.649841845035553,
                        "confusion": 0.017707835882902145,
                        "disappointment": 0.9830814003944397,
                        "confidence": 0.017482418566942215,
                        "joy": 0.018006160855293274,
                        "satisfaction": 0.012420760467648506,
                        "compassion": 0.015291541814804077,
                        "enthusiasm": 0.010126414708793163,
                        "thoughtful": 0.0493878610432148
                    },
                    "neutrality": {
                        "emotive": 0.9905229741707444,
                        "neutral": 0.009477025829255581
                    },
                    "polarity": {
                        "positive": 0.02294647102173378,
                        "negative": 0.9770535289782663
                    },
                    "id": "5"
                }
            ]
        }
    };

    const safetyScore = 70;
    

    let bgColor = 'white';

    if (safetyScore >= 80 ) {
        bgColor = 'green';
    } else if (safetyScore >= 70 && safetyScore <80) {
        bgColor = '#FFB200';
    } else if (safetyScore<70) {
        bgColor = 'red';
    }

    return (
        <>  
        <div className="donut" style={{backgroundColor: bgColor}}>
            <span className="donut__number">{safetyScore}</span>
        </div>
        </>
    )
}
export default Donut;







