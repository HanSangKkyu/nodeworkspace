
var data2 = [
    ["부팅과 관련된 실행 레벨이 정의되어 있는 파일 경로는?\n","/etc/inittab\n"],
    ["사용자의 만기일을 설정하는 명령어는?\n","usermod -e {만기일} {사용자명}\n"],
    ["메일 서버가 사용하는 호스트를 등록하는 파일\n vi (괄호) \n ihd.or.kr \n kait.or.kr","/etc/mail/local-host-names"],
    ["/etc/fstab 설정 방법\n","파일 시스템을 영구적으로 마운트 하기 위해 설정하는 곳이다. \n/dev/sdb1 /home2 ext4 defaults 1 1\n"],
    ["dhcpd.conf파일의 일부에 괄호는?\noption (괄호) ns1.ihd.or.kr;\n","domain-name-server\n"],
    ["ifconfig를 이용해서 ip를 변경하면 재시작시 모든 정보가 날아간다. 어떤 파일을 수정해야 재시작 후에도 변경된 ip가 유지 될까?\n","/etc/sysconfig/network-scripts/ifcfg-eth0\n"],
    ["iptables 명령의 '-j LOG' 옵션을 통해서 특정 호스트에 대한 로그를 기록하도록 정책을 설정하였다. 관련 로그가 기록되는 파일은?\n","/var/log/messages\n"],
    ["아파치에서 개인 홈페이지를 운영하기 위해서 관련 파일과 항목명을 알려 달라고 했다.","httpd-userdir.conf, UserDir"],
    ["squid.conf 파일에서 괄호는?\n(괄호) ufs /var/spool/squid 100 16 256\n","cache_dir\n"],
    ["ssh접속할 때 비밀번호 없이 접속할 수 있게 설정하는 명령어\n","scp ./ssh/id_rsa.pub ihd.or.kr:./ssh/authorized_keys\n"],
    ["시스템의 특정한 파일의 변화를 모니터링하고 알림을 해주는 유용한 보안 그리고 무결성 도구\n","Tripwire\n"],
    ["특정 ID로 들어오는 메일을 여러호스트에게 전달할 때 사용하는 파일\n사용자가 다른 메일 계정을 사용할 수 있도록 할 수 있다.","/etc/aliases"],
    ["하나의 메일서버에 여러개의 메일 도메인을 사용하려면 가상메일 주소를 만들어야 한다. 그 과정은?\n","~ vi /etc/mail/virtusertable\nwebmaster@linusjack.com linus // .com으로 들어오면 linus에게 전달\nwebmaster@linusjack.net jack // .net으로 들어오면 jack에게 전달\n그 후 해시테이블로 변경해야 한다.\n~ makemap hash /etc/mail/virtusertable < /etc/mail/virtusertable\n"],
    ["GRUB(부트로더)의 패스워드를 설정하는 명령어","password -md5"],
    ["사용자 쿼터를 이용하기 위해 /etc/fstab 파일에 등록하는 설정 값으로 알맞은 것은?\n","aquota.user\n"],
    ["모듈 정보를 출력하는 명령어\n","modinfo {모듈명}"],
    ["NIS 클라이언트에서 사용하는 명령어 NIS 서버의 이름과 관련 맵파일을 출력","ypwhich"],
    ["NIS 관련 맵 파일이 위치하는 디렉터리","/var/yp"],
    ["X윈도 기반의 프린터 설정 도구를 실행하는 명령은?\n","system-config-priter\n"],
    ["\n시스템 하드웨어 정보 출력 명령어\n","\nlspci\n"],
    ["삼바 서비스 사용자를 설정하는 파일 경로\n","/etc/samba/smbusers\n"],
    ["smb.conf에서 특정 호스트 대역을 허용하고 싶을 때 사용하는 명령어는?\n","hosts.allow = 192.168.0.\n"],
    ["FTP 로그 파일","/var/log/Xferlog "],
    ["아파치 웹 서버의 다중처리모듈 관련 정보를 확인하는 명령은?\n","httpd -l\n"],
    ["아파치 소스 파일이 정상적으로 다운로드 되었는지 검증해 보려고 한다. 이 때 사용하는 명령어는?\n","md5sum ~\n"],
    
]

var data3 = [
    ["ifconfig를 이용해서 ip를 변경하면 재시작시 모든 정보가 날아간다. 어떤 파일을 수정해야 재시작 후에도 변경된 ip가 유지 될까?\n","/etc/sysconfig/network-scripts/ifcfg-eth0\n"],
    ["사용자의 만기일을 설정하는 명령어는?\n","usermod -e {만기일} {사용자명}\n"],
    ["메일 서버가 사용하는 호스트를 등록하는 파일\n vi (괄호) \n ihd.or.kr \n kait.or.kr","/etc/mail/local-host-names"],
]