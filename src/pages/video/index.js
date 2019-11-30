import React from 'react'
import {Content} from './styled'
import {Link} from "react-router-dom"

class Video extends React.Component{
    render(){
        return(
            <Content>
                <div className="video">
                    <div className="video-box">
                        <Link to="/videoDetail">
                            <img src="https://img2.epetbar.com/nowater/2019-04/01/16/5c3fdc8f73148b0fc66cfa8efd86f9aa.jpg" alt=""/>
                            <div className="mask">
                                <p>
                                    伍二林家的一百天
                                </p>
                                <span>
                                    更新至6集
                                </span>
                            </div>
                        </Link>
                        
                        <div className="scroll-box">
                            <div className="scroll">
                                <div className="video-list">
                                    <Link to="/">
                                        <img src="https://img1.epetbar.com/2019-06/28/17/4927c9e3daa4864394c7637735336137.png?x-oss-process=style/cut&$1=220&$2=125" alt=""/>
                                        <div className="time">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOCAYAAAD5YeaVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NTg4M2Y0OC1hNGQ4LWY1NGItOWJhMy1jYWE4NmY0ZjQ1MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUFCNzI1QjMzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUFCNzI1QjIzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTE0MWNhYzUtMGU2NS0zNzRiLWE0M2QtM2Y4MGI5MjYxNTkzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc1ODgzZjQ4LWE0ZDgtZjU0Yi05YmEzLWNhYTg2ZjRmNDUyYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PunD9bUAAAB/SURBVHjaYvj//z8DECsD8X4g/gLEC4BYECqOgmGMbf9RwW0g1sSl+OV/TPABiL2wKf77Hzv4A8Ql6IoJgflAzMrCQBxIAOJ3jGDjgRYQoeEzEwMJgBTFM4j14FyQB4kJumL0oHuFI1I8sEXKVlKiWwmI9wLxZyCehyshAQQYADiUiluqhp0SAAAAAElFTkSuQmCC" alt=""/>
                                            02.26
                                        </div>
                                        <p>
				                            	犬瘟细小？伍十的致命危机
							 				</p>
                                    </Link>
                                </div>

                                <div className="video-list">
                                    <Link to="/">
                                        <img src="https://img1.epetbar.com/2019-06/28/17/4927c9e3daa4864394c7637735336137.png?x-oss-process=style/cut&$1=220&$2=125" alt=""/>
                                        <div className="time">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOCAYAAAD5YeaVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NTg4M2Y0OC1hNGQ4LWY1NGItOWJhMy1jYWE4NmY0ZjQ1MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUFCNzI1QjMzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUFCNzI1QjIzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTE0MWNhYzUtMGU2NS0zNzRiLWE0M2QtM2Y4MGI5MjYxNTkzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc1ODgzZjQ4LWE0ZDgtZjU0Yi05YmEzLWNhYTg2ZjRmNDUyYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PunD9bUAAAB/SURBVHjaYvj//z8DECsD8X4g/gLEC4BYECqOgmGMbf9RwW0g1sSl+OV/TPABiL2wKf77Hzv4A8Ql6IoJgflAzMrCQBxIAOJ3jGDjgRYQoeEzEwMJgBTFM4j14FyQB4kJumL0oHuFI1I8sEXKVlKiWwmI9wLxZyCehyshAQQYADiUiluqhp0SAAAAAElFTkSuQmCC" alt=""/>
                                            02.26
                                        </div>
                                        <p>
				                            	犬瘟细小？伍十的致命危机
							 				</p>
                                    </Link>
                                </div>

                                <div className="video-list">
                                    <Link to="/">
                                        <img src="https://img1.epetbar.com/2019-06/28/17/4927c9e3daa4864394c7637735336137.png?x-oss-process=style/cut&$1=220&$2=125" alt=""/>
                                        <div className="time">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOCAYAAAD5YeaVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NTg4M2Y0OC1hNGQ4LWY1NGItOWJhMy1jYWE4NmY0ZjQ1MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUFCNzI1QjMzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUFCNzI1QjIzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTE0MWNhYzUtMGU2NS0zNzRiLWE0M2QtM2Y4MGI5MjYxNTkzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc1ODgzZjQ4LWE0ZDgtZjU0Yi05YmEzLWNhYTg2ZjRmNDUyYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PunD9bUAAAB/SURBVHjaYvj//z8DECsD8X4g/gLEC4BYECqOgmGMbf9RwW0g1sSl+OV/TPABiL2wKf77Hzv4A8Ql6IoJgflAzMrCQBxIAOJ3jGDjgRYQoeEzEwMJgBTFM4j14FyQB4kJumL0oHuFI1I8sEXKVlKiWwmI9wLxZyCehyshAQQYADiUiluqhp0SAAAAAElFTkSuQmCC" alt=""/>
                                            02.26
                                        </div>
                                        <p>
				                            	犬瘟细小？伍十的致命危机
							 				</p>
                                    </Link>
                                </div>

                                <div className="video-list">
                                    <Link to="/">
                                        <img src="https://img1.epetbar.com/2019-06/28/17/4927c9e3daa4864394c7637735336137.png?x-oss-process=style/cut&$1=220&$2=125" alt=""/>
                                        <div className="time">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOCAYAAAD5YeaVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NTg4M2Y0OC1hNGQ4LWY1NGItOWJhMy1jYWE4NmY0ZjQ1MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUFCNzI1QjMzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUFCNzI1QjIzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTE0MWNhYzUtMGU2NS0zNzRiLWE0M2QtM2Y4MGI5MjYxNTkzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc1ODgzZjQ4LWE0ZDgtZjU0Yi05YmEzLWNhYTg2ZjRmNDUyYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PunD9bUAAAB/SURBVHjaYvj//z8DECsD8X4g/gLEC4BYECqOgmGMbf9RwW0g1sSl+OV/TPABiL2wKf77Hzv4A8Ql6IoJgflAzMrCQBxIAOJ3jGDjgRYQoeEzEwMJgBTFM4j14FyQB4kJumL0oHuFI1I8sEXKVlKiWwmI9wLxZyCehyshAQQYADiUiluqhp0SAAAAAElFTkSuQmCC" alt=""/>
                                            02.26
                                        </div>
                                        <p>
				                            	犬瘟细小？伍十的致命危机
							 				</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="video-box">
                        <img src="https://img2.epetbar.com/nowater/2019-04/01/16/5c3fdc8f73148b0fc66cfa8efd86f9aa.jpg" alt=""/>
                        <div className="mask">
                            <p>
                                伍二林家的一百天
                            </p>
                            <span>
                                更新至6集
                            </span>
                        </div>
                        <div className="scroll-box">
                            <div className="scroll">
                                <div className="video-list">
                                    <Link to="/">
                                        <img src="https://img1.epetbar.com/2019-06/28/17/4927c9e3daa4864394c7637735336137.png?x-oss-process=style/cut&$1=220&$2=125" alt=""/>
                                        <div className="time">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOCAYAAAD5YeaVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NTg4M2Y0OC1hNGQ4LWY1NGItOWJhMy1jYWE4NmY0ZjQ1MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUFCNzI1QjMzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUFCNzI1QjIzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTE0MWNhYzUtMGU2NS0zNzRiLWE0M2QtM2Y4MGI5MjYxNTkzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc1ODgzZjQ4LWE0ZDgtZjU0Yi05YmEzLWNhYTg2ZjRmNDUyYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PunD9bUAAAB/SURBVHjaYvj//z8DECsD8X4g/gLEC4BYECqOgmGMbf9RwW0g1sSl+OV/TPABiL2wKf77Hzv4A8Ql6IoJgflAzMrCQBxIAOJ3jGDjgRYQoeEzEwMJgBTFM4j14FyQB4kJumL0oHuFI1I8sEXKVlKiWwmI9wLxZyCehyshAQQYADiUiluqhp0SAAAAAElFTkSuQmCC" alt=""/>
                                            02.26
                                        </div>
                                        <p>
				                            	犬瘟细小？伍十的致命危机
							 				</p>
                                    </Link>
                                </div>

                                <div className="video-list">
                                    <Link to="/">
                                        <img src="https://img1.epetbar.com/2019-06/28/17/4927c9e3daa4864394c7637735336137.png?x-oss-process=style/cut&$1=220&$2=125" alt=""/>
                                        <div className="time">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOCAYAAAD5YeaVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NTg4M2Y0OC1hNGQ4LWY1NGItOWJhMy1jYWE4NmY0ZjQ1MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUFCNzI1QjMzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUFCNzI1QjIzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTE0MWNhYzUtMGU2NS0zNzRiLWE0M2QtM2Y4MGI5MjYxNTkzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc1ODgzZjQ4LWE0ZDgtZjU0Yi05YmEzLWNhYTg2ZjRmNDUyYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PunD9bUAAAB/SURBVHjaYvj//z8DECsD8X4g/gLEC4BYECqOgmGMbf9RwW0g1sSl+OV/TPABiL2wKf77Hzv4A8Ql6IoJgflAzMrCQBxIAOJ3jGDjgRYQoeEzEwMJgBTFM4j14FyQB4kJumL0oHuFI1I8sEXKVlKiWwmI9wLxZyCehyshAQQYADiUiluqhp0SAAAAAElFTkSuQmCC" alt=""/>
                                            02.26
                                        </div>
                                        <p>
				                            	犬瘟细小？伍十的致命危机
							 				</p>
                                    </Link>
                                </div>

                                <div className="video-list">
                                    <Link to="/">
                                        <img src="https://img1.epetbar.com/2019-06/28/17/4927c9e3daa4864394c7637735336137.png?x-oss-process=style/cut&$1=220&$2=125" alt=""/>
                                        <div className="time">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOCAYAAAD5YeaVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NTg4M2Y0OC1hNGQ4LWY1NGItOWJhMy1jYWE4NmY0ZjQ1MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUFCNzI1QjMzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUFCNzI1QjIzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTE0MWNhYzUtMGU2NS0zNzRiLWE0M2QtM2Y4MGI5MjYxNTkzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc1ODgzZjQ4LWE0ZDgtZjU0Yi05YmEzLWNhYTg2ZjRmNDUyYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PunD9bUAAAB/SURBVHjaYvj//z8DECsD8X4g/gLEC4BYECqOgmGMbf9RwW0g1sSl+OV/TPABiL2wKf77Hzv4A8Ql6IoJgflAzMrCQBxIAOJ3jGDjgRYQoeEzEwMJgBTFM4j14FyQB4kJumL0oHuFI1I8sEXKVlKiWwmI9wLxZyCehyshAQQYADiUiluqhp0SAAAAAElFTkSuQmCC" alt=""/>
                                            02.26
                                        </div>
                                        <p>
				                            	犬瘟细小？伍十的致命危机
							 				</p>
                                    </Link>
                                </div>

                                <div className="video-list">
                                    <Link to="/">
                                        <img src="https://img1.epetbar.com/2019-06/28/17/4927c9e3daa4864394c7637735336137.png?x-oss-process=style/cut&$1=220&$2=125" alt=""/>
                                        <div className="time">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOCAYAAAD5YeaVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NTg4M2Y0OC1hNGQ4LWY1NGItOWJhMy1jYWE4NmY0ZjQ1MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUFCNzI1QjMzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUFCNzI1QjIzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTE0MWNhYzUtMGU2NS0zNzRiLWE0M2QtM2Y4MGI5MjYxNTkzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc1ODgzZjQ4LWE0ZDgtZjU0Yi05YmEzLWNhYTg2ZjRmNDUyYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PunD9bUAAAB/SURBVHjaYvj//z8DECsD8X4g/gLEC4BYECqOgmGMbf9RwW0g1sSl+OV/TPABiL2wKf77Hzv4A8Ql6IoJgflAzMrCQBxIAOJ3jGDjgRYQoeEzEwMJgBTFM4j14FyQB4kJumL0oHuFI1I8sEXKVlKiWwmI9wLxZyCehyshAQQYADiUiluqhp0SAAAAAElFTkSuQmCC" alt=""/>
                                            02.26
                                        </div>
                                        <p>
				                            	犬瘟细小？伍十的致命危机
							 				</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </Content>
        )
    }
}

export default Video