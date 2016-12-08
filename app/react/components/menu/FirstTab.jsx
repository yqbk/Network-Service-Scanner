import React, { Component } from 'react'

import HostForm from './forms/HostForm'

import DetectedHosts from './scann/DetectedHosts';

import ProgressBar from './forms/progressBar'

import Graph from '../libs/index'




class FirstTab extends Component {

    constructor () {
        super()

        this.addHostToTable = this.addHostToTable.bind(this)
        this.setScannAmount = this.setScannAmount.bind(this)
        this.deleteHost = this.deleteHost.bind(this)

        this.state = {
            hostTable: [],
            scannAmount: 0
        }


    }

    addHostToTable (host) {
        // this.hostTable.push("llala")

        const tablica  = this.state.hostTable

        this.setState({
            hostTable: [...tablica, host]
        })

    }

    // todo zgodnie z konswencją?
    setScannAmount (amount) {

        this.setState({
            scannAmount: amount,
            hostTable: []
        })
    }

    deleteHost(index){

        // this.setState({
        //     hostTable: this.state.hostTable.filter((_, i) => i !== index)
        // });

        console.log("delete -> " + index)
    }



    render () {


        const hostNodes = this.state.hostTable.map( (host, index) => {
            return {id: index, label: host.IP}
            })

        const hostEdges = this.state.hostTable.map( (host, index) => {
            return index !== 0 ? {from: 0, to: index} : {}
        })



        console.log(hostNodes)


        var data = {
            nodes: hostNodes,
            edges: hostEdges
        };


        return (
            <div>
                <HostForm addHostToTable = {this.addHostToTable} setScannAmount = {this.setScannAmount}/>
                <ProgressBar scannAmount = {this.state.scannAmount} hostTableLenght = {this.state.hostTable.length}/>
                <Graph graph={data}/>
                <hr/>
                <DetectedHosts hostTable = {this.state.hostTable} deleteHost = {this.deleteHost} />
            </div>
        )
    }

}

export default FirstTab