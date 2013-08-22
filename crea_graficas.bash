#!/bin/bash
RRDPATH="/var/www/temp1/"
RAWCOLOUR="#FF0000"
RAWCOLOUR2="#00FF00"
TRENDCOLOUR="#0000FF"
#hour
rrdtool graph $RRDPATH/mhour.png --start -6h \
DEF:intemp=$RRDPATH/multirPItemp.rrd:in_temp:AVERAGE \
DEF:outtemp=$RRDPATH/multirPItemp.rrd:out_temp:AVERAGE \
CDEF:intrend=intemp,1200,TREND \
CDEF:outtrend=outtemp,1200,TREND \
LINE2:intemp$RAWCOLOUR:"Inside temperature" \
LINE1:intrend$TRENDCOLOUR:"20 min average" \
LINE2:outtemp$RAWCOLOUR2:"Outside temperature" \
LINE1:outtrend$TRENDCOLOUR:"20 min average"

#day
rrdtool graph $RRDPATH/mday.png --start -1d \
DEF:intemp=$RRDPATH/multirPItemp.rrd:in_temp:AVERAGE \
DEF:outtemp=$RRDPATH/multirPItemp.rrd:out_temp:AVERAGE \
CDEF:intrend=intemp,1800,TREND \
CDEF:outtrend=outtemp,1800,TREND \
LINE2:intemp$RAWCOLOUR:"Inside temperature" \
LINE1:intrend$TRENDCOLOUR:"1h average" \
LINE2:outtemp$RAWCOLOUR2:"Outside temperature" \
LINE1:outtrend$TRENDCOLOUR:"1h average"

#week
rrdtool graph $RRDPATH/mweek.png --start -1w \
DEF:intemp=$RRDPATH/multirPItemp.rrd:in_temp:AVERAGE \
DEF:outtemp=$RRDPATH/multirPItemp.rrd:out_temp:AVERAGE \
LINE2:intemp$RAWCOLOUR:"Inside temperature" \
LINE2:outtemp$RAWCOLOUR2:"Outside temperature" \



#month
rrdtool graph $RRDPATH/mmonth.png --start -1m \
DEF:intemp=$RRDPATH/multirPItemp.rrd:in_temp:AVERAGE \
DEF:outtemp=$RRDPATH/multirPItemp.rrd:out_temp:AVERAGE \
LINE2:intemp$RAWCOLOUR:"Inside temperature" \
LINE2:outtemp$RAWCOLOUR2:"Outside temperature" \

#year
rrdtool graph $RRDPATH/myear.png --start -1y \
DEF:intemp=$RRDPATH/multirPItemp.rrd:in_temp:AVERAGE \
DEF:outtemp=$RRDPATH/multirPItemp.rrd:out_temp:AVERAGE \
LINE2:intemp$RAWCOLOUR:"Inside temperature" \
LINE2:outtemp$RAWCOLOUR2:"Outside temperature" \
