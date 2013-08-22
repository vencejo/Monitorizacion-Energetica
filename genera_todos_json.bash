#!/bin/bash
PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin
export DISPLAY=:0.0

#Diario
rrdtool xport --json --start -1d \
DEF:temp_exterior=/var/www/temp1/multirPItemp.rrd:out_temp:AVERAGE \
DEF:temp_interior=/var/www/temp1/multirPItemp.rrd:in_temp:AVERAGE \
XPORT:temp_exterior XPORT:temp_interior > /var/www/Test/todas/archivo_exportado_diario.json
touch /var/www/Test/todas/archivo_exportado_comillas_diario.json
/usr/bin/python /var/www/Test/utilidades/generador_comillas.py /var/www/Test/todas/archivo_exportado_diario.json /var/www/Test/todas/archivo_exportado_comillas_diario.json

#Semanal
rrdtool xport --json --start -1w \
DEF:temp_exterior=/var/www/temp1/multirPItemp.rrd:out_temp:AVERAGE \
DEF:temp_interior=/var/www/temp1/multirPItemp.rrd:in_temp:AVERAGE \
XPORT:temp_exterior XPORT:temp_interior  > /var/www/Test/todas/archivo_exportado_semanal.json
touch /var/www/Test/todas/archivo_exportado_comillas_semanal.json
/usr/bin/python /var/www/Test/utilidades/generador_comillas.py /var/www/Test/todas/archivo_exportado_semanal.json /var/www/Test/todas/archivo_exportado_comillas_semanal.json

#Mensual
rrdtool xport --json --start -1m \
DEF:temp_exterior=/var/www/temp1/multirPItemp.rrd:out_temp:AVERAGE \
DEF:temp_interior=/var/www/temp1/multirPItemp.rrd:in_temp:AVERAGE \
XPORT:temp_exterior XPORT:temp_interior > /var/www/Test/todas/archivo_exportado_mensual.json
touch /var/www/Test/todas/archivo_exportado_comillas_mensual.json
/usr/bin/python /var/www/Test/utilidades/generador_comillas.py /var/www/Test/todas/archivo_exportado_mensual.json /var/www/Test/todas/archivo_exportado_comillas_mensual.json

#Anual
rrdtool xport --json --start -1y \
DEF:temp_exterior=/var/www/temp1/multirPItemp.rrd:out_temp:AVERAGE \
DEF:temp_interior=/var/www/temp1/multirPItemp.rrd:in_temp:AVERAGE \
XPORT:temp_exterior XPORT:temp_interior  > /var/www/Test/todas/archivo_exportado_anual.json
touch /var/www/Test/todas/archivo_exportado_comillas_anual.json
/usr/bin/python /var/www/Test/utilidades/generador_comillas.py /var/www/Test/todas/archivo_exportado_anual.json /var/www/Test/todas/archivo_exportado_comillas_anual.json



