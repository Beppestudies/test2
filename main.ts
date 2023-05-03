basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 5) {
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 120)
    } else {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 5) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 150)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 150)
        }
    }
})
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
    	
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 150)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    }
})
basic.forever(function () {
	
})
