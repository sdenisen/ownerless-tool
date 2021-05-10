import React from "react";
import {Component} from "react";
import {Table} from "antd";

class ScriptTableControl extends Component {

    column = [
            {
                title: "File Name",
                dataIndex: "name",
                key: "name",
                width: "13%",
            },
            {
                title: "Partition",
                dataIndex: "partition",
                key: "partition",
                width: "13%",
            },
            {
                title: "Script Owner",
                dataIndex: "owner",
                key: "owner",
                width: "13%",
            },
            {
                title: "Test Case IDs",
                dataIndex: "tc_id",
                key: "tc_id",
                width: "13%",
            },
            {
                title: "Assigned Owner on Current Build",
                dataIndex: "assigned_owner",
                key: "assigned_owner",
                width: "13%",
            },
        ];

    constructor(props) {
        super(props);

    }


    render() {

        const data = [
            {
            key: '1',
            name: 'web_supervisor_workflow_change_campaign_ratio.py',
            partition: 'web_sup_dyn2',
            owner: '<- No Owner ->',
            tc_id: "QET-14741",
            assigned_owner: "Sergey Denisenko",
          },{
            key: '1',
            name: 'web_supervisor_workflow_change_campaign_ratio.py',
            partition: 'web_sup_dyn2',
            owner: '<- No Owner ->',
            tc_id: "QET-14741",
            assigned_owner: "Sergey Denisenko",
          },{
            key: '1',
            name: 'web_supervisor_workflow_change_campaign_ratio.py',
            partition: 'web_sup_dyn2',
            owner: '<- No Owner ->',
            tc_id: "QET-14741",
            assigned_owner: "Sergey Denisenko",
          },{
            key: '1',
            name: 'web_supervisor_workflow_change_campaign_ratio.py',
            partition: 'web_sup_dyn2',
            owner: '<- No Owner ->',
            tc_id: "QET-14741",
            assigned_owner: "Sergey Denisenko",
          },{
            key: '1',
            name: 'web_supervisor_workflow_change_campaign_ratio.py',
            partition: 'web_sup_dyn2',
            owner: '<- No Owner ->',
            tc_id: "QET-14741",
            assigned_owner: "Sergey Denisenko",
          },{
            key: '1',
            name: 'web_supervisor_workflow_change_campaign_ratio.py',
            partition: 'web_sup_dyn2',
            owner: '<- No Owner ->',
            tc_id: "QET-14741",
            assigned_owner: "Sergey Denisenko",
          },{
            key: '1',
            name: 'web_supervisor_workflow_change_campaign_ratio.py',
            partition: 'web_sup_dyn2',
            owner: '<- No Owner ->',
            tc_id: "QET-14741",
            assigned_owner: "Sergey Denisenko",
          },{
            key: '1',
            name: 'web_supervisor_workflow_change_campaign_ratio.py',
            partition: 'web_sup_dyn2',
            owner: '<- No Owner ->',
            tc_id: "QET-14741",
            assigned_owner: "Sergey Denisenko",
          },{
            key: '1',
            name: 'web_supervisor_workflow_change_campaign_ratio.py',
            partition: 'web_sup_dyn2',
            owner: '<- No Owner ->',
            tc_id: "QET-14741",
            assigned_owner: "Sergey Denisenko",
          },{
            key: '1',
            name: 'web_supervisor_workflow_change_campaign_ratio.py',
            partition: 'web_sup_dyn2',
            owner: '<- No Owner ->',
            tc_id: "QET-14741",
            assigned_owner: "Sergey Denisenko",
          },{
            key: '1',
            name: 'web_supervisor_workflow_change_campaign_ratio.py',
            partition: 'web_sup_dyn2',
            owner: '<- No Owner ->',
            tc_id: "QET-14741",
            assigned_owner: "Sergey Denisenko",
          },{
            key: '1',
            name: 'web_supervisor_workflow_change_campaign_ratio.py',
            partition: 'web_sup_dyn2',
            owner: '<- No Owner ->',
            tc_id: "QET-14741",
            assigned_owner: "Sergey Denisenko",
          },{
            key: '1',
            name: 'web_supervisor_workflow_change_campaign_ratio.py',
            partition: 'web_sup_dyn2',
            owner: '<- No Owner ->',
            tc_id: "QET-14741",
            assigned_owner: "Sergey Denisenko",
          },{
            key: '1',
            name: 'web_supervisor_workflow_change_campaign_ratio.py',
            partition: 'web_sup_dyn2',
            owner: '<- No Owner ->',
            tc_id: "QET-14741",
            assigned_owner: "Sergey Denisenko",
          },
            {
            key: '1',
            name: 'web_supervisor_workflow_change_campaign_ratio.py',
            partition: 'web_sup_dyn2',
            owner: '<- No Owner ->',
            tc_id: "QET-14741",
            assigned_owner: "Sergey Denisenko",
          },
            {
            key: '1',
            name: 'web_supervisor_workflow_change_campaign_ratio.py',
            partition: 'web_sup_dyn2',
            owner: '<- No Owner ->',
            tc_id: "QET-14741",
            assigned_owner: "Sergey Denisenko",
          },
            {
            key: '1',
            name: 'web_supervisor_workflow_change_campaign_ratio.py',
            partition: 'web_sup_dyn2',
            owner: '<- No Owner ->',
            tc_id: "QET-14741",
            assigned_owner: "111Sergey Denisenko",
          },
        ]

        return <Table
            columns={this.column}
            bordered={true}
            dataSource={data}
            size="small"
            tableLayout={"fixed"}
        />
    }
}

export default ScriptTableControl;