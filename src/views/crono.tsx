import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';

const Crono = () => {
    const [tempoDecorrido, setTempoDecorrido] = useState(0);
    const [iniciado, setIniciado] = useState(false);
    const [textoBotao, setTextoBotao] = useState('Iniciar');

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;

        if (iniciado) {
            interval = setInterval(() => {
                setTempoDecorrido(prevTempo => prevTempo + 1);
            }, 1000);
        } else if (interval) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [iniciado]);

    const iniciarCronometro = () => {
        if (!iniciado) {
            setIniciado(true);
            textoBotao === 'Iniciar'|| 'Continuar' ? setTextoBotao('Pausar') : setTextoBotao('Continuar');
        } else {
            setIniciado(false);
            textoBotao === 'Pausar' ? setTextoBotao('Continuar') : setTextoBotao('Pausar');
        }
    };

    const zerarCronometro = () => {
        setTempoDecorrido(0);
        setIniciado(false);
        setTextoBotao('Iniciar');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.tempo}>
                {moment.utc(tempoDecorrido * 1000).format('HH:mm:ss')}
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={iniciarCronometro}>
                    <Text style={styles.buttonText}>{ textoBotao }</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={zerarCronometro}>
                    <Text style={styles.buttonText}>Zerar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333', // Fundo escuro
    },
    tempo: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#ffffff', // Texto branco
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    button: {
        flex: 1,
        backgroundColor: '#999', // Cor de fundo azul
        padding: 15,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff', // Texto branco
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Crono;