#!/bin/bash
# RF Learning Hub - Nginx Configuration Setup Script

echo "======================================"
echo "RF Learning Hub - Nginx Setup"
echo "======================================"
echo ""

# Check if running with sudo
if [ "$EUID" -ne 0 ]; then
    echo "This script needs sudo privileges. Please run with sudo:"
    echo "sudo bash NGINX-SETUP.sh"
    exit 1
fi

echo "Step 1: Copying nginx configuration..."
cp /home/rfw/rf-web/nginx-rf-learning-hub.conf /etc/nginx/sites-available/rf-learning-hub

echo "Step 2: Creating symbolic link to sites-enabled..."
ln -sf /etc/nginx/sites-available/rf-learning-hub /etc/nginx/sites-enabled/rf-learning-hub

echo "Step 3: Removing default nginx site (optional)..."
if [ -L /etc/nginx/sites-enabled/default ]; then
    echo "Disabling default nginx site..."
    rm /etc/nginx/sites-enabled/default
fi

echo "Step 4: Testing nginx configuration..."
nginx -t

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Nginx configuration test passed!"
    echo ""
    echo "Step 5: Reloading nginx..."
    systemctl reload nginx

    if [ $? -eq 0 ]; then
        echo ""
        echo "======================================"
        echo "✅ SUCCESS! Nginx configured!"
        echo "======================================"
        echo ""
        echo "Your RF Learning Hub is now accessible at:"
        echo "  - http://10.0.1.98"
        echo "  - http://localhost"
        echo ""
        echo "Backend API is accessible at:"
        echo "  - http://10.0.1.98/api/*"
        echo "  - Proxied to backend server on port 3000"
        echo ""
        echo "Check nginx status:"
        echo "  sudo systemctl status nginx"
        echo ""
    else
        echo ""
        echo "❌ Error reloading nginx"
        echo "Check logs: sudo tail -f /var/log/nginx/error.log"
    fi
else
    echo ""
    echo "❌ Nginx configuration test failed!"
    echo "Please check the configuration file and try again."
    echo "View errors: sudo nginx -t"
fi
