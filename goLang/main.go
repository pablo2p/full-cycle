package main

import (
	"crypto/tls"
	"encoding/json"
	"fmt"

	"github.com/codeedu/imersao6-go/email"
	"github.com/codeedu/imersao6-go/kafka"
	ckafka "github.com/confluentinc/confluent-kafka-go/kafka"
)

func main() {
	var emailCh = make(chan email.Email)
	var msgChan = make(chan *ckafka.Message)

	d := gomail.newDialer(
		"smtp.mailgun.org",
		587,
		"exemplo@schoolofnet.com",
		"935a4283f701af4f9ce1ac9f30f8086f-c250c684-21311e7f",
	)

	d.TLSConfig = &tls.Config{InsecureSkipVerify: true}

	es := email.newMailSender()
	es.From = "zkyouta@gmail.com"
	es.Dailer = d

	go es.Send(emailCh)

	configMap := &ckafka.ConfigMap{
		"bootstrap.servers": "kafka:9094",
		"client.id":         "emailapp",
		"group.id":          "emailapp",
	}
	topics := []string{"emails"}
	consumer := kafka.NewConsumer(configMap, topics)
	go consumer.Consume(msgChan)

	for msg := range msgChan {
		var input email.Email
		json.Unmarshal(msg.Value, &input)
		fmt.Println("Recebendo mensagem")
		emailCh <- input
	}
}
