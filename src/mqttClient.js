import AWSMqtt from 'aws-mqtt-client'

const AWS_ACCESS_KEY = 'YOUR_SECRET_HERE';
const AWS_SECRET_ACCESS_KEY = 'YOUR_SECRET_HERE';
const AWS_IOT_ENDPOINT_HOST = 'endpoint.iot.region.amazonaws.com';

const mqttClient = new AWSMqtt({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    endpointAddress: AWS_IOT_ENDPOINT_HOST,
    region: 'us-east-1'
});

module.exports = mqttClient