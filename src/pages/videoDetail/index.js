import React from "react"
import { Content } from "./styled"
import Header from "../../common/header"

class VideoDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "视频详情"
        }
    }
    render() {
        return (
            <Content>
                <Header title={this.state.title}></Header>
                {/* 视频 */}
                <video controls="controls" src="http://player.epetbar.com/247c4a7116de471bae3439a95052c283/1ce0b4680ced4c0281f7ef1b82049b0d-5287d2089db37e62345123a1be272f8b.mp4">

                </video>

                {/* 视频标题 */}
                <div className="info">
                    <h2>
                        犬瘟细小？伍十的致命危机
                    </h2>
                    <p>
                        <img src="https://img2.epetbar.com/dogs/5.jpg?x-oss-process=style/cut&$1=30&$2=30" alt="" />

                        伍二林家的100天

                    </p>
                </div>

                {/* 视频列表 */}
                <div className="video-list">
                    <div className="title">
                        <h3>
                            伍二林家的一百天
                            <span>更新至6集</span>
                        </h3>
                        <p>查看更多></p>
                    </div>

                    <div className="video-box">
                        <div className="scroll">
                            <div className="li">
                                <img src="https://img1.epetbar.com/2019-06/28/17/4927c9e3daa4864394c7637735336137.png?x-oss-process=style/cut&$1=220&$2=125" alt="" />
                                <div className="time">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOCAYAAAD5YeaVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NTg4M2Y0OC1hNGQ4LWY1NGItOWJhMy1jYWE4NmY0ZjQ1MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUFCNzI1QjMzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUFCNzI1QjIzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTE0MWNhYzUtMGU2NS0zNzRiLWE0M2QtM2Y4MGI5MjYxNTkzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc1ODgzZjQ4LWE0ZDgtZjU0Yi05YmEzLWNhYTg2ZjRmNDUyYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PunD9bUAAAB/SURBVHjaYvj//z8DECsD8X4g/gLEC4BYECqOgmGMbf9RwW0g1sSl+OV/TPABiL2wKf77Hzv4A8Ql6IoJgflAzMrCQBxIAOJ3jGDjgRYQoeEzEwMJgBTFM4j14FyQB4kJumL0oHuFI1I8sEXKVlKiWwmI9wLxZyCehyshAQQYADiUiluqhp0SAAAAAElFTkSuQmCC" alt="" />
                                    02.26
                                </div>
                                <p>
                                    犬瘟细小？伍十的致命危机
                                    </p>
                            </div>
                            <div className="li">
                                <img src="https://img1.epetbar.com/2019-06/28/17/4927c9e3daa4864394c7637735336137.png?x-oss-process=style/cut&$1=220&$2=125" alt="" />
                                <div className="time">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOCAYAAAD5YeaVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NTg4M2Y0OC1hNGQ4LWY1NGItOWJhMy1jYWE4NmY0ZjQ1MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUFCNzI1QjMzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUFCNzI1QjIzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTE0MWNhYzUtMGU2NS0zNzRiLWE0M2QtM2Y4MGI5MjYxNTkzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc1ODgzZjQ4LWE0ZDgtZjU0Yi05YmEzLWNhYTg2ZjRmNDUyYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PunD9bUAAAB/SURBVHjaYvj//z8DECsD8X4g/gLEC4BYECqOgmGMbf9RwW0g1sSl+OV/TPABiL2wKf77Hzv4A8Ql6IoJgflAzMrCQBxIAOJ3jGDjgRYQoeEzEwMJgBTFM4j14FyQB4kJumL0oHuFI1I8sEXKVlKiWwmI9wLxZyCehyshAQQYADiUiluqhp0SAAAAAElFTkSuQmCC" alt="" />
                                    02.26
                                </div>
                                <p>
                                    犬瘟细小？伍十的致命危机
                                    </p>
                            </div>
                            <div className="li">
                                <img src="https://img1.epetbar.com/2019-06/28/17/4927c9e3daa4864394c7637735336137.png?x-oss-process=style/cut&$1=220&$2=125" alt="" />
                                <div className="time">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOCAYAAAD5YeaVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NTg4M2Y0OC1hNGQ4LWY1NGItOWJhMy1jYWE4NmY0ZjQ1MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUFCNzI1QjMzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUFCNzI1QjIzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTE0MWNhYzUtMGU2NS0zNzRiLWE0M2QtM2Y4MGI5MjYxNTkzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc1ODgzZjQ4LWE0ZDgtZjU0Yi05YmEzLWNhYTg2ZjRmNDUyYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PunD9bUAAAB/SURBVHjaYvj//z8DECsD8X4g/gLEC4BYECqOgmGMbf9RwW0g1sSl+OV/TPABiL2wKf77Hzv4A8Ql6IoJgflAzMrCQBxIAOJ3jGDjgRYQoeEzEwMJgBTFM4j14FyQB4kJumL0oHuFI1I8sEXKVlKiWwmI9wLxZyCehyshAQQYADiUiluqhp0SAAAAAElFTkSuQmCC" alt="" />
                                    02.26
                                </div>
                                <p>
                                    犬瘟细小？伍十的致命危机
                                    </p>
                            </div>
                            <div className="li">
                                <img src="https://img1.epetbar.com/2019-06/28/17/4927c9e3daa4864394c7637735336137.png?x-oss-process=style/cut&$1=220&$2=125" alt="" />
                                <div className="time">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOCAYAAAD5YeaVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NTg4M2Y0OC1hNGQ4LWY1NGItOWJhMy1jYWE4NmY0ZjQ1MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUFCNzI1QjMzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUFCNzI1QjIzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTE0MWNhYzUtMGU2NS0zNzRiLWE0M2QtM2Y4MGI5MjYxNTkzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc1ODgzZjQ4LWE0ZDgtZjU0Yi05YmEzLWNhYTg2ZjRmNDUyYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PunD9bUAAAB/SURBVHjaYvj//z8DECsD8X4g/gLEC4BYECqOgmGMbf9RwW0g1sSl+OV/TPABiL2wKf77Hzv4A8Ql6IoJgflAzMrCQBxIAOJ3jGDjgRYQoeEzEwMJgBTFM4j14FyQB4kJumL0oHuFI1I8sEXKVlKiWwmI9wLxZyCehyshAQQYADiUiluqhp0SAAAAAElFTkSuQmCC" alt="" />
                                    02.26
                                </div>
                                <p>
                                    犬瘟细小？伍十的致命危机
                                    </p>
                            </div>
                            <div className="li">
                                <img src="https://img1.epetbar.com/2019-06/28/17/4927c9e3daa4864394c7637735336137.png?x-oss-process=style/cut&$1=220&$2=125" alt="" />
                                <div className="time">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOCAYAAAD5YeaVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NTg4M2Y0OC1hNGQ4LWY1NGItOWJhMy1jYWE4NmY0ZjQ1MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUFCNzI1QjMzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUFCNzI1QjIzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTE0MWNhYzUtMGU2NS0zNzRiLWE0M2QtM2Y4MGI5MjYxNTkzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc1ODgzZjQ4LWE0ZDgtZjU0Yi05YmEzLWNhYTg2ZjRmNDUyYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PunD9bUAAAB/SURBVHjaYvj//z8DECsD8X4g/gLEC4BYECqOgmGMbf9RwW0g1sSl+OV/TPABiL2wKf77Hzv4A8Ql6IoJgflAzMrCQBxIAOJ3jGDjgRYQoeEzEwMJgBTFM4j14FyQB4kJumL0oHuFI1I8sEXKVlKiWwmI9wLxZyCehyshAQQYADiUiluqhp0SAAAAAElFTkSuQmCC" alt="" />
                                    02.26
                                </div>
                                <p>
                                    犬瘟细小？伍十的致命危机
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 底部 */}
                <div className="footer">
                    <div className="box">
                        <p>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAhCAIAAADcc4UFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3MmE2ZTdjYS02ZDNjLTI1NDQtOTUzZi0zM2Y1NjU3NmQ0NjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUYzQkRERkMyRkY0MTFFOUFBOTI4MzY0MDFERTcwMDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUYzQkRERkIyRkY0MTFFOUFBOTI4MzY0MDFERTcwMDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTJiOGRhZTctYTg1Yy0xYzQ0LTlhNmMtNWM4MjMwNmIxY2Q1IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OWNiMWNkZTQtMWQ0OS0xMWU5LTliNjQtZDA0ZGFkODZkOWMxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+RhjKRQAAA2JJREFUeNqUV9l24jAMjUwKCaUs5zCFDPP/XzZ9YGtoJ9NQINHIsfEiO+0ZPbSJY0nW4nsFtE2bkEBiBBLABBNXMDF7drvd6XSaz+fPz8/J/4iQ+uBZRPTcOGdIqqoqX0vaUJbl36qS+zFmFfVfMNpInkKrwLUApErbthSQiXu727XYss1u9N0bOjExyxg9olw9Ho7X61V67Vbo+Xg88q3gP6N9Fj3GuZzP5/JUKh/GGuWQ1oEdEbljMDGF38yKSfR2uzXZtzYRaR2ZIkSqBtqTChMjgSuz6uzaBZhq61hP5YlVCGIZFfYN4hm/3W6Hw8G9A+qfOdj+sKc9rjoGdwQT1nth2CjzRl3HusNNgOzJ7a63L+5q4FoxaaNFSstHJ3Vde/nuOdOY5HGcZVme50JEArCemqZRdkk+Pz+xRWM3RI0IjphPAKPRiPyS13E+HqQDHdO5rl/Lsv6oL9eLd+/CCFBXCVmI+FXjDYdDinKxWKS/X16ul2sEHSDQBL9A0PPga106oWwJhTRx4IIQAeCbG44MrG1KRbEuBIgoqIR2VW3CdYh23b2S1CDr9VpkeVb8LKKg1wEPhJAY9gLeLz64Kb6rFkUhG5KeJpOJJhuIYysPNEoWED/EarWaPE4s7lFvzGdztx7AG8DxDZw5+17JJol6FebDai2d39sHLcphtDBg1lkcmkhRpops6gQQE7r7qGCjUcbT7dvStlH6sewcsIEsf1FYRJX85GyiJtn82qSDVJswVwr94kOQKfBInSxsNhvW0oIx/0Oa2lbsub+g+D4EXLC5IWexicXvOomP0APMaCAevyB1bcEnVWFLgpp1CGp7IQAcwumX5taE9RO2x+7nsp4woLM++vEP07RNGG6ESCSBRgedaEojF85aMOUM5j0W073dQ0wCh7tC0ZyHwbzHjhRyeYhJ+GWhbFbYvMfSbPdFqeRb1lAxOXdD/U/jsaO9mOb4lHMxGMxmM4IZGtDf3t7o1wM6QGJqaUclsF/SkMH0PvNroFunuYCwknyoIudZvlwuyR/97iA+ZQVj90QZS/U4Ad5kajRp3phOp4v54mH44M2cXbhPnRB503D5/v5umltOO7zz0Z/Cug10zP1+PxwNycHT9AmSHvoHnvPqT0XTLjle/lgSDTGNfwIMAAbw2Pq+mPqdAAAAAElFTkSuQmCC" alt=""/>
                            <span>收藏.12</span>
                        </p>
                        <p>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAfCAIAAAAA3/ihAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3MmE2ZTdjYS02ZDNjLTI1NDQtOTUzZi0zM2Y1NjU3NmQ0NjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTM2RThEMjMyRkY1MTFFOTg1NUQ4NzNBMDFERjU3Q0EiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTM2RThEMjIyRkY1MTFFOTg1NUQ4NzNBMDFERjU3Q0EiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTJiOGRhZTctYTg1Yy0xYzQ0LTlhNmMtNWM4MjMwNmIxY2Q1IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OWNiMWNkZTQtMWQ0OS0xMWU5LTliNjQtZDA0ZGFkODZkOWMxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hicZOwAAA0VJREFUeNqMV2lz4jAMjXJBD44FttNpy///X9uZXa6mU5gSkkC0L3EuOzJUH2jiyJL1/HSU8jx3DGHHofbtfD5/f38npyRJkyzNLvlFbXFd1/O8IAgGg8FwOLy/v/d932qnfCbsVUtUrjQCi19fX/v9/nQ6iYdQQvUyfoeD4WQyGY/HOEdfs1AujqlbwcpnKZfLxRGlo28cEeJ73vRXIYVL2Vm97xgfV6tVlmW9CKj0wldQ6grgfX5+BrY9Z7V29PGx3e5EBG6IhDAWF78X8/lcgHGz2QA6684rRsu42YSzEuD59PSknl2lG0VR5cnRwenzQQe2hZfbxa4Ulx99qq+FM/Btt9sJqqT/5fqXncZBG1CpxMzakcqP291WUbpwtllvlBLXZvrkbn1Su0Qkh8465jC+3qwLZ/Exjk+xxXy9k61G6Wf0QWRxHLv7w164HrK/cu8oNl3SHg6Hg1sViFsnpO4FksWPIx672lhEhvwlyRVp8NdUYHv0osMOg9I0dVGTWMKl4bIVTEfiqgRg9Z3ZVaWaDJqzfENiNGxJweabekWLcMMw1NLFIBnJdag0QFryGRrctgNlHI7ch4cHMxoy89fCe9aST3dkIsnO4+OjOxlPiIh611OERCS0kB/wT4NHHcml0Wjker6HWsl2C4VL1iuZZL1Q6FKKNJym0ynIUZQrdIHi5qS7rVAhiX8sqgkSDsLFYkGqNqKlvry8qMbalkdqWVN2kB7ZqHmxc5Rr4+Ry1WIcB0PL8u0N7DQ4Uhti0ko563WUHfEbRgTfXy6XMK7ORN3pKk3Sv//+JkliqVi3udIV+EBMzQWZY4HKc/Q2NDzVdGz9/notBadmsxmoQHoTIs5z7lk5Ho/vf977rfRmZLih8Wg8m88CPzCaPvz6zO2lN7YwFSEljFGO+xNHfTj4wBbUh2polKol3vyGx9ypTJh/DU8wgawMgxATMYRKAaFCJUGItDVxJhN838So1Ig+I2MIBFdhk7tgXrk5y7pv3glaeHLC1N0s3N3dvb6+Igiz5NIPKKPXdN8MnJ31at2wCjMmeFWRiqXSVyk6LA7I+opv7Mw5z84ZUgRFGjWzTfO2BupFvWqMnX8xRBjLlf8CDACXPZl7yUJUUAAAAABJRU5ErkJggg==" alt=""/>
                            <span>评论.6</span>
                        </p>
                    </div>
                </div>

            </Content>
        )
    }
}

export default VideoDetail